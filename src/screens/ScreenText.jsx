// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { PerspectiveCamera, Text } from '@react-three/drei'
// import { Screen } from './Screen'

// export function ScreenText({ invert, x = 0, y = 1.2, ...props }) {
//     const textRef = useRef()
//     const rand = Math.random() * 10000
//     useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8))
//     return (
//         <Screen {...props} >
//             <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
//             <color attach="background" args={[invert ? 'black' : '#35c19f']} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 5]} />
//             <Text font="/Inter-Medium.woff" position={[x, y, 0]} ref={textRef} fontSize={2} letterSpacing={-0.1} color={!invert ? 'black' : '#35c19f'}>
//                 Hishita Gupta
//             </Text>

//         </Screen>
//     )
// }


import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Text } from '@react-three/drei'
import { Screen } from './Screen'
import { Color, Vector3 } from 'three'

// Remove the preloadFont import and usage

export function ScreenText({ 
  invert = false, 
  x = 0, 
  y = 1.2, 
  text = "Hishita Gupta",
  fontSize = 2,
  letterSpacing = -0.1,
  ...props 
}) {
  const textRef = useRef()
  
  // Memoize values that don't need to change on every render
  const cameraProps = useMemo(() => ({
    makeDefault: true,
    manual: true,
    aspect: 1 / 1,
    position: new Vector3(0, 0, 15)
  }), [])

  const backgroundColor = useMemo(() => 
    new Color(invert ? 'black' : '#35c19f'), 
    [invert]
  )

  const textColor = useMemo(() => 
    invert ? '#35c19f' : 'black',
    [invert]
  )

  const lightPosition = useMemo(() => 
    new Vector3(10, 10, 5),
    []
  )

  const rand = useMemo(() => Math.random() * 10000, [])

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8
    }
  })

  return (
    <Screen {...props}>
      <PerspectiveCamera {...cameraProps} />
      
      <color attach="background" args={[backgroundColor]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={lightPosition} />
      
      <Text
        ref={textRef}
        font="/Inter-Medium.woff"
        position={[x, y, 0]}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        color={textColor}
        // Add text optimization props
        anchorX="center"
        anchorY="middle"
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        material-toneMapped={false}
      >
        {text}
      </Text>
    </Screen>
  )
}