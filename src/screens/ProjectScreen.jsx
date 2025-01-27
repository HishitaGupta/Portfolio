import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import * as dat from 'dat.gui';
import { Screen } from './Screen';
import { SpinningBox } from './SpinningBox';


export const ProjectScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Add event listener for screen changes
    useEffect(() => {
        const handleScreenChange = (event) => {
            if (event.detail.screenName === 'Projects') {
                setIsTransitioning(true);
                setTimeout(() => {
                    setShowHtml(true);
                    setIsTransitioning(false);
                }, 1000);
            } else {
                setShowHtml(false);
            }
        };

        window.addEventListener('changeScreen', handleScreenChange);
        return () => window.removeEventListener('changeScreen', handleScreenChange);
    }, []);

    // useEffect(() => {
    //     if (showHtml) {
    //         const gui = new dat.GUI({ name: 'HTML Controls' });

    //         const posFolder = gui.addFolder('HTML Position');

    //         posFolder.add(htmlPosition, 'x', -3, 3, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, x: value }));
    //         });
    //         posFolder.add(htmlPosition, 'y', -3, 3, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, y: value }));
    //         });
    //         posFolder.add(htmlPosition, 'z', -3, 3, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, z: value }));
    //         });

    //         const rotFolder = gui.addFolder('HTML Rotation');
    //         rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, x: value }));
    //         });
    //         rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, y: value }));
    //         });
    //         rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, z: value }));
    //         });

    //         const scaleFolder = gui.addFolder('HTML Scale');
    //         scaleFolder.add({ scale: htmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
    //             setHtmlScale(value);
    //         });

    //         posFolder.open();
    //         scaleFolder.open();

    //         return () => {
    //             gui.destroy();
    //         };
    //     }
    // }, [showHtml]);

    return (
        <Screen {...props} onClick={props.onClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#C084FC']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        rotation={ props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
                        style={{
                            width: '330px',
                            height: '240px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(8px)',
                            transformOrigin: 'center',
                            borderRadius: '10px',
                            border: '2px solid white',
                            mixBlendMode: 'difference',
                        }}
                    >
                        <div style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '4px',
                            padding: '2px',
                        }}>
                            
                            
                           
                        </div>
                    </Html>
                </group>
            ) : (
                <>
                    <ambientLight intensity={Math.PI / 2} />
                    <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
                    <pointLight decay={0} position={[-10, -10, -10]} />
                    <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
                </>
            )}
        </Screen>
    )
}



