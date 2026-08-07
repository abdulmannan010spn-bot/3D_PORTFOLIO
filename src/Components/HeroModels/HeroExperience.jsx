import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Lego_man } from "./Lego_man";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
    // eslint-disable-next-line no-unused-vars
    const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Canvas
      camera={{
        position: [0, 0, 11],
        fov: 45,
      }}
    >
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <OrbitControls
        enableDamping
        enableZoom={!isTablet}
        enablePan={false}
        maxDistance={20}
        minDistance={8}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
       <Lego_man position={[1.5, -2, 0]} />

    </Canvas>
  );
};

export default HeroExperience;