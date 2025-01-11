import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Screen } from './Screen';


export const AboutScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const handleScreenChange = (event) => {
            if (event.detail.screenName === 'About') {
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

    return (
        <Screen {...props} onClick={props.onClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#35c19f']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        style={{
                            width: '245px',
                            height: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '8px',
                            border: '2px solid white',
                            mixBlendMode: 'difference'
                        }}
                    >
                        {/* <div style={{
                            textAlign: 'center',
                            color: '#FF6F61',
                            fontSize: '4px',
                            padding: '2px'
                            }}>
                            <h2 style={{
                                margin: 0,
                                marginBottom: '2px',
                                fontSize: '4px',
                                color: 'black'
                            }} id="about-heading">Hishita Gupta About</h2>
                            <p style={{
                                margin: 0,
                                marginBottom: '3px',
                                fontSize: '8px'
                            }}>Full Stack Developer</p>
                            <div style={{
                                display: 'flex',
                                gap: '2px',
                                justifyContent: 'center'
                            }}>
                                <button 
                                    onClick={() => {
                                        const heading = document.querySelector('#about-heading');
                                        if (heading) {
                                            heading.textContent = 'Vishesh Gupta About';
                                        }
                                    }}
                                    style={{
                                        fontSize: '4px',
                                        padding: '1px 2px',
                                        backgroundColor: '#FF6F61',
                                        border: 'none',
                                        borderRadius: '2px',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Change Name
                                </button>
                            </div>
                        </div> */}

                        <Router>
                            <nav style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <Link to="/" style={{ color: '#FF6F61', textDecoration: 'none' }}>Home</Link>
                                <Link to="/about" style={{ color: '#FF6F61', textDecoration: 'none' }}>About</Link>
                                <Link to="/contact" style={{ color: '#FF6F61', textDecoration: 'none' }}>Contact</Link>
                            </nav>
                            <div style={{ textAlign: 'center' }}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </div>
                        </Router>
                    </Html>
                </group>
            ) : (
                <>
                    <ambientLight intensity={Math.PI / 2} />
                    <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
                    <pointLight decay={0} position={[-10, -10, -10]} />
                    {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
                </>
            )}
        </Screen>
    )
}


function Home() {
    return <div>Welcome to the Home Page</div>;
}

function About() {
    return <div>This is the About Page</div>;
}

function Contact() {
    return <div>Get in touch on the Contact Page</div>;
}