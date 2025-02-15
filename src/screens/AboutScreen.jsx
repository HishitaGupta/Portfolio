// import React, { useState, useEffect } from 'react';
// import { PerspectiveCamera, Html } from '@react-three/drei';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import * as dat from 'dat.gui'
// import { Screen } from './Screen';
// import Heading from '../assets/Text.png';
// import Hishita from '../assets/Hishita.jpg';


// export const AboutScreen = (props) => {
//     const [showHtml, setShowHtml] = useState(false)
//     const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlScale, setHtmlScale] = useState(1)
//     const [isTransitioning, setIsTransitioning] = useState(false)
// useEffect(() => {
//         const handleScreenChange = (event) => {
//             if (event.detail.screenName === 'About') {
//                 setIsTransitioning(true);
//                 setTimeout(() => {
//                     setShowHtml(true);
//                     setIsTransitioning(false);
//                 }, 1000);
//             } else {
//                 setShowHtml(false);
//             }
//         };

//         window.addEventListener('changeScreen', handleScreenChange);
//         return () => window.removeEventListener('changeScreen', handleScreenChange);
//     }, []);


//     // text controls
//     // useEffect(() => { 
//     //     if (showHtml) {
//     //         const gui = new dat.GUI({ name: 'HTML Controls' });

//     //         const posFolder = gui.addFolder('HTML Position');

//     //         posFolder.add(htmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, x: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, y: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, z: value }));
//     //         });

//     //         const rotFolder = gui.addFolder('HTML Rotation');
//     //         rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, x: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, y: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, z: value }));
//     //         });

//     //         const scaleFolder = gui.addFolder('HTML Scale');
//     //         scaleFolder.add({ scale: htmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
//     //             setHtmlScale(value);
//     //         });

//     //         posFolder.open();
//     //         rotFolder.open();
//     //         scaleFolder.open();

//     //         return () => {
//     //             gui.destroy();
//     //         };
//     //     }
//     // }, [showHtml]);
//     const [enlarged, setEnlarged] = useState(3);

//     const handleEnlarge = (index) => {
//         setEnlarged(index);
//       };
    
//       const handleMouseLeave = () => {
//         // Reset to default enlarged card when mouse leaves
//         setEnlarged(3); // Change this value to the index of the desired default card
//       };

//     const developers = [
//         { name: "Mike", role: "Web3 Developer", image: Hishita },
//         { name: "Samite", role: "WordPress Developer", image: Hishita },
//         { name: "Hashi", role: "Java Developer", image: Hishita },
//         { name: "Kaity", role: "Web Developer", image: Hishita },
//         { name: "Lauren", role: "PHP Developer", image: Hishita },
//         { name: "Ryan", role: "SEO Developer", image: Hishita },
//         { name: "Dakes", role: "SQL Developer", image: Hishita },
//     ];
// return (
//         <Screen {...props} onClick={props.onClick}>
//             <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
//             <color attach="background" args={['#35c19f']} />
//             {showHtml && !isTransitioning ? (
//                 <group>
//                     <Html
//                         transform
//                         scale={props.htmlScale || htmlScale}
//                         position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
//                         rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
//                         style={{
//                             width: '270px',
//                             height: '200px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             // background: 'rgba(255, 255, 255, 0.1)',
//                             backdropFilter: 'blur(8px)',
//                             transformOrigin: 'center',
//                             borderRadius: '10px',
//                             // border: '2px solid white',
//                             mixBlendMode: 'difference',
//                             padding: '8px',
//                         }}
//                     >
//                         <div
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 backgroundColor: '#C0C0C0',
//                                 border: '1px solid #000',
//                                 fontFamily: 'Tahoma, sans-serif',
//                                 fontSize: '10px',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 padding: '1.5px',
//                             }}
//                         >
//                             {/* Title Bar */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#000080',
//                                     color: '#FFFFFF',
//                                     padding: '1.5px 2px',
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <span
//                                     style={{
//                                         padding: '0',
//                                         fontSize: '6px',
//                                     }}
//                                 >
//                                     C:\Users\Hishita Gupta\Life\Achievements.txt
//                                 </span>

//                                 {/* Title Bar Buttons */}
//                                 <div
//                                     style={{
//                                         display: 'flex',
//                                         gap: '2px',
//                                     }}
//                                 >
//                                     {/* Minimize Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         {/* <div
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '1px',
//                                                                     backgroundColor: '#000',
//                                                                 }}
//                                                             ></div> */}
//                                         <FaRegWindowMinimize style={{
//                                             width: '6px',
//                                             height: '1px',
//                                             backgroundColor: '#fff',
//                                         }} />
//                                     </div>

//                                     {/* Maximize Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         {/* <div
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '6px',
//                                                                     border: '1px solid #000',
//                                                                 }}
//                                                             ></div> */}
//                                         <FaRegWindowMaximize
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 color: 'black',
//                                                 // backgroundColor: '#000'
//                                             }} />
//                                     </div>

//                                     {/* Close Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',

//                                         }}
//                                     >
//                                         {/* <div
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '6px',
//                                                                     backgroundColor: '#FF0000',
//                                                                 }}
//                                                             ></div> */}
//                                         <IoMdClose
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 color: '#000000',
//                                                 //  backgroundColor: '#000'
//                                             }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Menu Bar */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#C0C0C0',
//                                     color: '#000000',
//                                     padding: '1.5px 1px',
//                                     fontSize: '5px',
//                                     display: 'flex',
//                                     gap: '4px',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <span>Me</span>
//                                 <span>Edit</span>
//                                 <span>Search</span>
//                                 <span>Help</span>
//                             </div>

//                             {/* Content Area */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#FFFFFF',
//                                     color: '#000000',
//                                     padding: '10px',
//                                     overflowY: 'scroll',
//                                     overflowX: 'hidden',
//                                     whiteSpace: 'pre-wrap',
//                                     flexGrow: 1,
//                                     border: '1px solid #808080',
//                                     boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
//                                     display: 'flex',
//                                     gap: '10px',
//                                     flexDirection: 'column',
//                                     width: '100%',
//                                     msOverflowStyle: 'none',
//                                     scrollbarWidth: 'none',
//                                     '&::-webkit-scrollbar': {
//                                         display: 'none',
//                                     },
//                                     justifyContent: 'center',
//                                     alignItems: 'center'
//                                 }}
//                             >

//                                 <div className="carousel-container">
//                                     {developers.map((dev, index) => (
//                                         <div
//                                             key={index}
//                                             className={`card ${enlarged === index ? "enlarged" : ""}`}
//                                             onMouseEnter={() => handleEnlarge(index)}
//                                             onMouseLeave={handleMouseLeave}
//                                         >
//                                             <img src={dev.image} alt={dev.name} />
//                                             <div className="info">
//                                                 <h3>{dev.name}</h3>
//                                                 <p>{dev.role}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                             </div>




//                         </div>
//                     </Html>



//                 </group>
//             ) : (
//                 <>
//                     <ambientLight intensity={Math.PI / 2} />
//                     <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
//                     <pointLight decay={0} position={[-10, -10, -10]} />
//                     {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
//                 </>
//             )}
//         </Screen>
//     )
// }


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PerspectiveCamera, Html, Text } from '@react-three/drei';
import { IoMdClose } from 'react-icons/io';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { Screen } from './Screen';
import * as dat from 'dat.gui'

// Separate styled components for better performance
const WindowContainer = React.memo(({ children }) => (
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#C0C0C0',
    border: '1px solid #000',
    fontFamily: 'Tahoma, sans-serif',
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5px',
  }}>
    {children}
  </div>
));

const TitleBar = React.memo(({ children }) => (
  <div style={{
    backgroundColor: '#000080',
    color: '#FFFFFF',
    padding: '1.5px 2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    {children}
  </div>
));

const ContentArea = React.memo(({ children }) => (
  <div style={{
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: '10px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    whiteSpace: 'pre-wrap',
    flexGrow: 1,
    border: '1px solid #808080',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    width: '100%',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {children}
  </div>
));

// Memoized developer card component
const DeveloperCard = React.memo(({ dev, isEnlarged, onMouseEnter, onMouseLeave }) => (
  <div
    className={`card ${isEnlarged ? "enlarged" : ""}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img src={dev.image} alt={dev.name} loading="lazy" />
    <div className="info">
      <h3>{dev.name}</h3>
      <p>{dev.role}</p>
    </div>
  </div>
));

export const AboutScreen = React.memo((props) => {
  const [showHtml, setShowHtml] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [enlarged, setEnlarged] = useState(3);

  // Memoize static values
  // const htmlPosition = useMemo(() => ({ x: 0, y: 0, z: 0 }), []);
  // const htmlRotation = useMemo(() => ({ x: 0, y: 0, z: 0 }), []);
  // const htmlScale = useMemo(() => 1, []);

  const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 });
  const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 });
  const [htmlScale, setHtmlScale] = useState(1);

  const [textScale, setTextScale] = useState(1)
      const [textPosition, setTextPosition] = useState({ x: 0, y: 0, z: 0 })
      const [textRotation, setTextRotation] = useState({ x: 0, y: 0, z: 0 })

  // Memoize developers array
  const developers = useMemo(() => [
    { name: "Mike", role: "Web3 Developer", image: props.images.Hishita },
    { name: "Samite", role: "WordPress Developer", image: props.images.Hishita },
    { name: "Hashi", role: "Java Developer", image: props.images.Hishita },
    { name: "Kaity", role: "Web Developer", image: props.images.Hishita },
    { name: "Lauren", role: "PHP Developer", image: props.images.Hishita },
    { name: "Ryan", role: "SEO Developer", image: props.images.Hishita },
    { name: "Dakes", role: "SQL Developer", image: props.images.Hishita },
  ], [props.images.Hishita]);

  // Memoized event handlers
  const handleScreenChange = useCallback((event) => {
    if (event.detail.screenName === 'About') {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShowHtml(true);
        setIsTransitioning(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowHtml(false);
    }
  }, []);

  const handleEnlarge = useCallback((index) => {
    setEnlarged(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setEnlarged(3);
  }, []);

  useEffect(() => {
    window.addEventListener('changeScreen', handleScreenChange);
    return () => window.removeEventListener('changeScreen', handleScreenChange);
  }, [handleScreenChange]);


    //   text controls
    // useEffect(() => { 
    //     if (!showHtml) {
    //         const gui = new dat.GUI({ name: 'HTML Controls' });

    //         const posFolder = gui.addFolder('HTML Position');

    //         posFolder.add(htmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, x: value }));
    //         });
    //         posFolder.add(htmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, y: value }));
    //         });
    //         posFolder.add(htmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, z: value }));
    //         });

    //         const rotFolder = gui.addFolder('HTML Rotation');
    //         rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, x: value }));
    //         });
    //         rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, y: value }));
    //         });
    //         rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, z: value }));
    //         });

    //         const scaleFolder = gui.addFolder('HTML Scale');
    //         scaleFolder.add({ scale: textScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
    //             setTextScale(value);
    //         });

    //         posFolder.open();
    //         scaleFolder.open();

    //         return () => {
    //             gui.destroy();
    //         };
    //     }
    // }, [!showHtml]);


         // text controls
    useEffect(() => { 
        if (showHtml) {
            const gui = new dat.GUI({ name: 'HTML Controls' });

            const posFolder = gui.addFolder('HTML Position');

            posFolder.add(htmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, x: value }));
            });
            posFolder.add(htmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, y: value }));
            });
            posFolder.add(htmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
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
            rotFolder.open();
            scaleFolder.open();

            return () => {
                gui.destroy();
            };
        }
    }, [showHtml]);

    const isMobile = window.innerWidth <= 768;

  // Memoize the HTML content
  const htmlContent = useMemo(() => (
    <Html
      transform
      scale={isMobile ? props.mobileHtmlScale : (props.htmlScale )}
      position={isMobile  ? props.mobileHtmlPos : (props.htmlPos )}
      rotation={isMobile  ? props.mobileHtmlRot : (props.htmlRot )}
      style={{
        width: '270px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        transformOrigin: 'center',
        borderRadius: '10px',
        mixBlendMode: 'difference',
        padding: '8px',
      }}
    >
      <WindowContainer>
        <TitleBar>
          <span style={{ padding: '0', fontSize: '6px' }}>
            C:\Users\Hishita Gupta\Life\Achievements.txt
          </span>
          <div style={{ display: 'flex', gap: '2px' }}>
            {['minimize', 'maximize', 'close'].map((action) => (
              <div
                key={action}
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#C0C0C0',
                  border: '1px solid #808080',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {action === 'minimize' && <FaRegWindowMinimize style={{ width: '6px', height: '1px' }} />}
                {action === 'maximize' && <FaRegWindowMaximize style={{ width: '6px', height: '6px', color: 'black' }} />}
                {action === 'close' && <IoMdClose style={{ width: '6px', height: '6px', color: '#000000' }} />}
              </div>
            ))}
          </div>
        </TitleBar>

        <div style={{
          backgroundColor: '#C0C0C0',
          color: '#000000',
          padding: '1.5px 1px',
          fontSize: '5px',
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}>
          {['Me', 'Edit', 'Search', 'Help'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <ContentArea>
          <div className="carousel-container">
            {developers.map((dev, index) => (
              <DeveloperCard
                key={dev.name}
                dev={dev}
                isEnlarged={enlarged === index}
                onMouseEnter={() => handleEnlarge(index)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </ContentArea>
      </WindowContainer>
    </Html>
  ), [developers, enlarged, handleEnlarge, handleMouseLeave, htmlPosition, htmlRotation, htmlScale, props.htmlPos, props.htmlRot, props.htmlScale, props.mobileHtmlPos,props.mobileHtmlRot,props.mobileHtmlScale]);

  return (
    <Screen {...props} onClick={props.onClick}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['#35c19f']} />
      {showHtml && !isTransitioning ? (
        <group>
          {htmlContent}
        </group>
      ) : (
        <>
          <ambientLight intensity={Math.PI / 2} />
          <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
          <pointLight decay={0} position={[-10, -10, -10]} />
          <Text
                  fontSize={0.38}
                  letterSpacing={-0.1}
                  color="black"
                  scale={props.textScale || 1}
                  position={[-3.1, 0.75, textPosition.z]}
                  rotation={[textRotation.x, textRotation.y, textRotation.z]}
                  font="/Inter-Medium.woff"
                >
                  Achievements
                </Text>
        </>
      )}
    </Screen>
  );
});

AboutScreen.displayName = 'AboutScreen';