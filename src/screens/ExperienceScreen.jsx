import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import * as dat from 'dat.gui';
import { Screen } from './Screen';
import { SpinningBox } from './SpinningBox';

export const ExperienceScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        if (showHtml) {
            const gui = new dat.GUI({ name: 'HTML Controls' });

            const posFolder = gui.addFolder('HTML Position');

            posFolder.add(htmlPosition, 'x', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, x: value }));
            });
            posFolder.add(htmlPosition, 'y', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, y: value }));
            });
            posFolder.add(htmlPosition, 'z', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, z: value }));
            });

            const rotFolder = gui.addFolder('HTML Rotation');
            rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, x: value }));
            });
            rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, y: value }));
            });
            rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, z: value }));
            });

            const scaleFolder = gui.addFolder('HTML Scale');
            scaleFolder.add({ scale: htmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
                setHtmlScale(value);
            });

            posFolder.open();
            scaleFolder.open();

            return () => {
                gui.destroy();
            };
        }
    }, [showHtml]);

    const handleScreenClick = (e) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            if (props.onClick) {
                props.onClick(e);
                // Wait for camera animation to complete before showing HTML
                setTimeout(() => {
                    setShowHtml(true);
                    setIsTransitioning(false);
                }, 1000); // Yes, this is one second (1000 milliseconds)
            }
        }
    };

    return (
        <Screen {...props} onClick={handleScreenClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#E63946']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
                        style={{
                            width: '245px',
                            height: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // background: 'rgba(255, 255, 255, 0.1)',
                            // backdropFilter: 'blur(8px)',
                            transformOrigin: 'center',
                            borderRadius: '10px',
                            border: '2px solid white',
                            mixBlendMode: 'difference',
                        }}
                    >
                        <div style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: '4px',
                            padding: '2px',
                        }}>
                            <h2 style={{ margin: '0 0 2px 0', fontSize: '4px' }}>Hishita Gupta Experience</h2>
                            <p style={{ margin: '0 0 3px 0', fontSize: '8px' }}>Full Stack Developer</p>
                            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        border: '2px solid white',
                                        // padding: '15px 30px',
                                        borderRadius: '8px',
                                        fontSize: '6px'
                                    }}
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        border: '2px solid white',
                                        padding: '1px 3px',
                                        borderRadius: '8px',
                                        fontSize: '3px'
                                    }}
                                >
                                    LinkedIn
                                </a>
                            </div>
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
