import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

/**
 * Lanyard
 *
 * A physics-driven "ID card on a lanyard" effect:
 * - A card (rigid body) hangs from a fixed anchor via a chain of joints.
 * - The strap is rendered as a bending band using MeshLine, following the joints.
 * - The card can be grabbed and dragged; releasing it lets physics swing it back.
 *
 * Props:
 *  - cardGlbUrl: path to your card .glb (defaults to "/models/card.glb")
 *  - cardTextureUrl: optional texture applied to the whole card body (legacy/base)
 *  - cardFrontTextureUrl: image (from /public) shown on the card's front face
 *  - cardBackTextureUrl: image (from /public) shown on the card's back face
 *  - cardFaceWidth / cardFaceHeight: size of the front/back image planes (model-space units)
 *  - cardFaceOffset: how far the image planes sit off the card surface (avoids z-fighting)
 *  - cardBackMirrored: flip the back image horizontally if it looks mirrored (default false)
 *  - cardScale: uniform scale of the card model (default 2.25)
 *  - cardWidth / cardHeight: collider size, controls the card's "shape"/aspect ratio
 *  - cardColor: base color when no texture is supplied
 *  - cardRoughness / cardMetalness / cardClearcoat: card material finish
 *  - strapColor: hex color of the strap
 *  - strapWidth: thickness of the strap line (default 0.15)
 *  - strapOpacity: 0–1 transparency of the strap
 *  - position: [x, y, z] anchor position offset
 */
export default function Lanyard({
  cardGlbUrl = "/models/card.glb",
  cardTextureUrl,
  cardFrontTextureUrl,
  cardBackTextureUrl,
  cardFaceWidth = 1,
  cardFaceHeight = 1.4,
  cardFaceOffset = 0.06,
  cardBackMirrored = false,
  cardScale = 2.25,
  cardWidth = 0.8,
  cardHeight = 1.1,
  cardColor = "#e5e5e5",
  cardRoughness = 0.3,
  cardMetalness = 0.5,
  cardClearcoat = 1,
  strapColor = "#1a1a1a",
  strapWidth = 0.15,
  strapOpacity = 1,
  position = [0, 0, 0],
}) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 13], fov: 25 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Physics gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band
            cardGlbUrl={cardGlbUrl}
            cardTextureUrl={cardTextureUrl}
            cardFrontTextureUrl={cardFrontTextureUrl}
            cardBackTextureUrl={cardBackTextureUrl}
            cardFaceWidth={cardFaceWidth}
            cardFaceHeight={cardFaceHeight}
            cardFaceOffset={cardFaceOffset}
            cardBackMirrored={cardBackMirrored}
            cardScale={cardScale}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            cardColor={cardColor}
            cardRoughness={cardRoughness}
            cardMetalness={cardMetalness}
            cardClearcoat={cardClearcoat}
            strapColor={strapColor}
            strapWidth={strapWidth}
            strapOpacity={strapOpacity}
            anchorPosition={position}
          />
        </Physics>

        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={2}
              position={[0, 5, -9]}
              scale={10}
            />
            <Lightformer
              form="circle"
              intensity={2}
              position={[-5, 1, -1]}
              scale={4}
            />
            <Lightformer
              form="circle"
              intensity={2}
              position={[5, 1, -1]}
              scale={4}
            />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  cardGlbUrl,
  cardTextureUrl,
  cardFrontTextureUrl,
  cardBackTextureUrl,
  cardFaceWidth,
  cardFaceHeight,
  cardFaceOffset,
  cardBackMirrored,
  cardScale,
  cardWidth,
  cardHeight,
  cardColor,
  cardRoughness,
  cardMetalness,
  cardClearcoat,
  strapColor,
  strapWidth,
  strapOpacity,
  anchorPosition,
}) {
  // Refs for each segment of the strap chain + the card body
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Chain the joints together — this creates the "rope" feel
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.2, 0]]);

  const { nodes, materials } = useGLTF(cardGlbUrl);
  // useTexture must always be called (Rules of Hooks) — fall back to a 1x1
  // transparent placeholder when no texture URL is provided.
  const FALLBACK_TEXTURE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";
  const cardTexture = useTexture(cardTextureUrl || FALLBACK_TEXTURE);
  const cardFrontTexture = useTexture(cardFrontTextureUrl || FALLBACK_TEXTURE);
  const cardBackTexture = useTexture(cardBackTextureUrl || FALLBACK_TEXTURE);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
    []
  );

  useEffect(() => {
    document.body.style.cursor = hovered
      ? dragged
        ? "grabbing"
        : "grab"
      : "auto";
  }, [hovered, dragged]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      card.current?.setNextKinematicTranslation({
        x: vec.x,
        y: vec.y,
        z: vec.z,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current) {
      // Keep the curve points synced with the physics joints
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <group position={anchorPosition}>
      {/* Fixed anchor point (invisible, immovable) */}
      <RigidBody ref={fixed} type="fixed" />

      {/* Chain of small rope-joint segments */}
      <RigidBody
        position={[0.5, 0, 0]}
        ref={j1}
        angularDamping={2}
        linearDamping={2}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody
        position={[1, 0, 0]}
        ref={j2}
        angularDamping={2}
        linearDamping={2}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody
        position={[1.5, 0, 0]}
        ref={j3}
        angularDamping={2}
        linearDamping={2}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>

      {/* The card itself */}
      <RigidBody
        position={[2, 0, 0]}
        ref={card}
        angularDamping={2}
        linearDamping={2}
        type={dragged ? "kinematicPosition" : "dynamic"}
      >
        <CuboidCollider args={[cardWidth, cardHeight, 0.01]} />
        <group
          scale={cardScale}
          position={[0, -1.2, -0.05]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
            setDragged(true);
          }}
          onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId);
            setDragged(false);
          }}
        >
          {nodes?.card && (
            <mesh geometry={nodes.card.geometry} castShadow>
              {cardTextureUrl ? (
                <meshPhysicalMaterial
                  map={cardTexture}
                  map-anisotropy={16}
                  clearcoat={cardClearcoat}
                  clearcoatRoughness={0.15}
                  roughness={cardRoughness}
                  metalness={cardMetalness}
                  color="white"
                />
              ) : (
                <meshPhysicalMaterial
                  clearcoat={cardClearcoat}
                  clearcoatRoughness={0.15}
                  roughness={cardRoughness}
                  metalness={cardMetalness}
                  color={cardColor}
                />
              )}
            </mesh>
          )}
          {nodes?.clip && (
            <mesh geometry={nodes.clip.geometry} material={materials?.metal} />
          )}
          {nodes?.clamp && (
            <mesh
              geometry={nodes.clamp.geometry}
              material={materials?.metal}
            />
          )}

          {/* Front face image */}
          {cardFrontTextureUrl && (
            <mesh position={[0, 0, cardFaceOffset]}>
              <planeGeometry args={[cardFaceWidth, cardFaceHeight]} />
              <meshBasicMaterial
                map={cardFrontTexture}
                map-anisotropy={16}
                toneMapped={false}
              />
            </mesh>
          )}

          {/* Back face image (rotated 180° to face the opposite direction) */}
          {cardBackTextureUrl && (
            <mesh
              position={[0, 0, -cardFaceOffset]}
              rotation={[0, Math.PI, 0]}
              scale={[cardBackMirrored ? -1 : 1, 1, 1]}
            >
              <planeGeometry args={[cardFaceWidth, cardFaceHeight]} />
              <meshBasicMaterial
                map={cardBackTexture}
                map-anisotropy={16}
                toneMapped={false}
              />
            </mesh>
          )}
        </group>
      </RigidBody>

      {/* The strap/band rendered via meshline, following the joint chain */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color={strapColor}
          resolution={[1000, 1000]}
          lineWidth={strapWidth}
          transparent={strapOpacity < 1}
          opacity={strapOpacity}
          depthTest={false}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/card.glb");