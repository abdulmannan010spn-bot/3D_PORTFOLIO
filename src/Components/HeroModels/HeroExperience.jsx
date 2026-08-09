import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Lego_man } from "./Lego_man";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
   
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
      <group scale={isMobile ? 0.7 :1}
      position={[0,-3.5,0]} rotation={[0.-Math.PI/4 ,0]}>
      </group>
       <Lego_man position={isMobile ? [0, -3, 0] :[1.5, -2, 0]} />

    </Canvas>
  );
};

export default HeroExperience;