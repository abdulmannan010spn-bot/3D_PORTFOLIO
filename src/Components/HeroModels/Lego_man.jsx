
// import { useGLTF } from "@react-three/drei";

// export function Lego_man(props) {
//   const { nodes, materials } = useGLTF("/models/lego_man.glb");

//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <mesh
//             geometry={nodes.R_Leg_Pants_0.geometry}
//             material={materials.Pants}
//             position={[0, 1.118, 0]}
//           />

//           <mesh
//             geometry={nodes.L_Leg_Pants_0.geometry}
//             material={materials.Pants}
//             position={[0, 1.118, 0]}
//           />

//           <mesh
//             geometry={nodes.Hips_Pants_0.geometry}
//             material={materials.Pants}
//             position={[0, 1.118, 0]}
//           />

//           <mesh
//             geometry={nodes.Torso_Torso_0.geometry}
//             material={materials.Torso}
//           />

//           <mesh
//             geometry={nodes.R_Arm_Sleeves_0.geometry}
//             material={materials.Sleeves}
//             position={[-0.47, 2.516, -0.008]}
//           />

//           <mesh
//             geometry={nodes.R_Hand_Body_0.geometry}
//             material={materials.Body}
//             position={[-0.892, 2.174, 0.091]}
//           />

//           <mesh
//             geometry={nodes.L_Arm_Sleeves_0.geometry}
//             material={materials.Sleeves}
//             position={[0.467, 2.51, 0]}
//           />

//           <mesh
//             geometry={nodes.L_Hand_Body_0.geometry}
//             material={materials.Body}
//             position={[0.89, 2.179, 0.093]}
//           />

//           <mesh
//             geometry={nodes.Head_Body_0.geometry}
//             material={materials.Body}
//           />

//           <mesh
//             geometry={nodes.Hair_Hair_0.geometry}
//             material={materials.Hair}
//           />

//           <mesh
//             geometry={nodes.Hair_Hair_0_1.geometry}
//             material={materials.Hair}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/lego_man.glb");

