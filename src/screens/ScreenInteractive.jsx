import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Screen } from './Screen';
import { SpinningBox } from './SpinningBox';

export const ScreenInteractive = (props) => {
    return (
        <Screen {...props}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['orange']} />
            <ambientLight intensity={Math.PI / 2} />
            <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
            <pointLight decay={0} position={[-10, -10, -10]} />
            <SpinningBox position={[0, 0.58, 0]} scale={0.5} />
        </Screen>
    )
}
