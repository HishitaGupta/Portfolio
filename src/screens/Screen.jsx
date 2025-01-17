// import React from 'react'
// import { useGLTF, RenderTexture } from '@react-three/drei'

// export function Screen({ frame, panel, children, ...props }) {
//     const { nodes, materials } = useGLTF('/computers_1-transformed.glb')
//     return (
//         <group {...props}>
//             <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} />
//             <mesh geometry={nodes[panel].geometry}>
//                 <meshBasicMaterial toneMapped={false}>
//                     <RenderTexture 
//                         attach="map" 
//                         anisotropy={16} 
//                         height={1024} 
//                         width={1024}
//                         encoding={3} // sRGB encoding
//                     >
//                         {children}
//                     </RenderTexture>
//                 </meshBasicMaterial>
//             </mesh>
//         </group>
//     )
// }


import React, { memo } from 'react';
import { useGLTF, RenderTexture } from '@react-three/drei';

export const Screen = memo(({ frame, panel, children, ...props }) => {
  const { nodes, materials } = useGLTF('/computers_1-transformed.glb', true); // Enable caching for GLTF loading

  return (
    <group {...props}>
      {/* Frame mesh with shadow */}
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes[frame]?.geometry} 
        material={materials?.Texture} 
      />
      {/* Panel with render texture */}
      <mesh geometry={nodes[panel]?.geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture
            attach="map"
            anisotropy={4} // Reduce anisotropy to balance performance and quality
            height={512}  // Lower resolution to reduce memory usage
            width={512}
            encoding={3}  // sRGB encoding
          >
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
});
