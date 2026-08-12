import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/card.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.card.geometry}
        material={materials.base}
        position={[-0.174, -0.031, 0.437]}
      />

      <mesh
        geometry={nodes.clip.geometry}
        material={materials.metal}
        position={[-0.174, -0.031, 0.437]}
      />

      <mesh
        geometry={nodes.clamp.geometry}
        material={materials.metal}
        position={[-0.174, -0.031, 0.437]}
      />
    </group>
  );
}

export default Model;

useGLTF.preload("/models/card.glb");