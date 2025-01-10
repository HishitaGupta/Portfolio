import React from 'react'
import { useGLTF, RenderTexture } from '@react-three/drei'

export function Screen({ frame, panel, children, ...props }) {
    const { nodes, materials } = useGLTF('/computers_1-transformed.glb')
    return (
        <group {...props}>
            <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} />
            <mesh geometry={nodes[panel].geometry}>
                <meshBasicMaterial toneMapped={false}>
                    <RenderTexture attach="map" anisotropy={16} height={512} width={512}>
                        {children}
                    </RenderTexture>
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}