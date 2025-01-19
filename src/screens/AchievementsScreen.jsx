// import React, { useState, useEffect } from 'react';
// import { PerspectiveCamera, Html } from '@react-three/drei';
// import * as dat from 'dat.gui';
// import { Screen } from './Screen';
// import { SpinningBox } from './SpinningBox';
// import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import Heading from '../assets/Text.png';
// import Hishita from '../assets/Hishita.jpg';
// import { FaArrowPointer } from 'react-icons/fa6';



// export const AchievementsScreen = (props) => {
//     const [showHtml, setShowHtml] = useState(false)
//     const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlScale, setHtmlScale] = useState(1)
//     const [isTransitioning, setIsTransitioning] = useState(false)
//     const [hovered, setHovered] = useState(null); // Track hovered element
//     const [expanded, setExpanded] = useState(null); // Track expanded element

//     const handleMouseEnter = (id) => {
//         setHovered(id); // Set hovered element id
//     };

//     const handleMouseLeave = () => {
//         setHovered(null); // Reset hovered element id
//     };

//     const handleClick = (id) => {
//         setExpanded((prev) => (prev === id ? null : id)); // Toggle expanded state
//     };
//     // Add event listener for screen changes
//     useEffect(() => {
//         const handleScreenChange = (event) => {
//             if (event.detail.screenName === 'Achievements') {
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

//     // useEffect(() => {
//     //     if (showHtml) {
//     //         const gui = new dat.GUI({ name: 'HTML Controls' });

//     //         const posFolder = gui.addFolder('HTML Position');

//     //         posFolder.add(htmlPosition, 'x', -3, 3, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, x: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'y', -3, 3, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, y: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'z', -3, 3, 0.1).onChange((value) => {
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
//     //         scaleFolder.open();

//     //         return () => {
//     //             gui.destroy();
//     //         };
//     //     }
//     // }, [showHtml]);

//     return (
//         <Screen {...props} onClick={props.onClick}>
//             <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
//             <color attach="background" args={['#6C63FF']} />
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
//                                     C:\Users\Hishita Gupta\Life\Projects.txt
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
//                                 <div
//                                     style={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         gap: '2px',
//                                         width: '100%'
//                                     }}
//                                 >
//                                     {/* Uber Clone */}
//                                     <div
//                                         style={{
//                                             borderBottom: '1px solid #000',
//                                             padding: '2px',
//                                             cursor: 'pointer',
//                                             position: 'relative',
//                                             height: expanded === 'uber' || hovered === 'uber' ? 'auto' : '20px',
//                                             transition: 'height 0.3s ease-in-out',
//                                             paddingBottom: expanded === 'uber' || hovered === 'uber' ? '10px' : '0',
//                                             overflow: 'hidden',
//                                             textAlign: 'center'
//                                         }}
//                                         onMouseEnter={() => handleMouseEnter('uber')}
//                                         onMouseLeave={handleMouseLeave}
//                                         onClick={() => handleClick('uber')}

//                                         className='bungee-regular'
//                                     >
//                                         <p>Uber Clone </p>
//                                         {(expanded === 'uber' || hovered === 'uber') && (
//                                             <div>
//                                                 <img
//                                                     src={Hishita} // Replace with actual image path
//                                                     alt="Uber Clone"
//                                                     style={{
//                                                         width: '50px',
//                                                         height: '50px',
//                                                         marginTop: '10px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         position: 'absolute',
//                                                         top: '10%',
//                                                         right: '10%'
//                                                     }}
//                                                 />
//                                                 <p
//                                                     style={{
//                                                         fontSize: '6px',
//                                                         marginTop: '5px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         width: '50%',
//                                                         textAlign: 'left'

//                                                     }}
//                                                     className="cousine-regular"
//                                                 >
//                                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis suscipit quam obcaecati nisi
//                                                     consectetur doloremque vitae libero, quisquam quo laborum molestiae reprehenderit
//                                                 </p>
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* AURA ai */}
//                                     <p
//                                         style={{
//                                             borderBottom: '1px solid #000',
//                                             padding: '2px',
//                                             cursor: 'pointer',
//                                             position: 'relative',
//                                             height: expanded === 'aura' || hovered === 'aura' ? 'auto' : '20px',
//                                             transition: 'height 0.3s ease-in-out',
//                                             paddingBottom: expanded === 'aura' || hovered === 'aura' ? '10px' : '0',
//                                             textAlign: 'center'
//                                         }}
//                                         onMouseEnter={() => handleMouseEnter('aura')}
//                                         onMouseLeave={handleMouseLeave}
//                                         onClick={() => handleClick('aura')}
//                                         className='bungee-regular'
//                                     >
//                                         AURA ai
//                                         {(expanded === 'aura' || hovered === 'aura') && (
//                                             <>
//                                                 <img
//                                                     src={Hishita} // Replace with actual image path
//                                                     alt="Uber Clone"
//                                                     style={{
//                                                         width: '50px',
//                                                         height: '50px',
//                                                         marginTop: '10px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         position: 'absolute',
//                                                         top: '10%',
//                                                         right: '10%'
//                                                     }}
//                                                 />
//                                                 <p
//                                                     style={{
//                                                         fontSize: '6px',
//                                                         marginTop: '5px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         width: '50%',
//                                                         textAlign: 'left'
//                                                     }}
//                                                     className="cousine-regular"
//                                                 >
//                                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis suscipit quam obcaecati nisi
//                                                     consectetur doloremque vitae libero, quisquam quo laborum molestiae reprehenderit
//                                                 </p>
//                                             </>
//                                         )}
//                                     </p>

//                                     {/* Sip & Shop */}
//                                     <p
//                                         style={{
//                                             borderBottom: '1px solid #000',
//                                             padding: '2px',
//                                             cursor: 'pointer',
//                                             position: 'relative',
//                                             height: expanded === 'sip' || hovered === 'sip' ? 'auto' : '20px',
//                                             transition: 'height 0.3s ease-in-out',
//                                             paddingBottom: expanded === 'sip' || hovered === 'sip' ? '10px' : '0',
//                                             textAlign: 'center'
//                                         }}
//                                         onMouseEnter={() => handleMouseEnter('sip')}
//                                         onMouseLeave={handleMouseLeave}
//                                         onClick={() => handleClick('sip')}
//                                         className='bungee-regular'
//                                     >
//                                         Sip & Shop
//                                         {(expanded === 'sip' || hovered === 'sip') && (
//                                             <>
//                                                 <img
//                                                     src={Hishita} // Replace with actual image path
//                                                     alt="Uber Clone"
//                                                     style={{
//                                                         width: '50px',
//                                                         height: '50px',
//                                                         marginTop: '10px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         position: 'absolute',
//                                                         top: '10%',
//                                                         right: '10%'
//                                                     }}
//                                                 />
//                                                 <p
//                                                     style={{
//                                                         fontSize: '6px',
//                                                         marginTop: '5px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         width: '50%',
//                                                         textAlign: 'left'
//                                                     }}
//                                                     className="cousine-regular"
//                                                 >
//                                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis suscipit quam obcaecati nisi
//                                                     consectetur doloremque vitae libero, quisquam quo laborum molestiae reprehenderit
//                                                 </p>
//                                             </>
//                                         )}
//                                     </p>

//                                     {/* Frontend */}
//                                     <p
//                                         style={{
//                                             padding: '2px',
//                                             cursor: 'pointer',
//                                             position: 'relative',
//                                             height: expanded === 'frontend' || hovered === 'frontend' ? 'auto' : '20px',
//                                             transition: 'height 0.3s ease-in-out',
//                                             paddingBottom: expanded === 'frontend' || hovered === 'frontend' ? '10px' : '0',
//                                             textAlign: 'center'
//                                         }}
//                                         onMouseEnter={() => handleMouseEnter('frontend')}
//                                         onMouseLeave={handleMouseLeave}
//                                         onClick={() => handleClick('frontend')}
//                                         className='bungee-regular'
//                                     >
//                                         Frontend
//                                         {(expanded === 'frontend' || hovered === 'frontend') && (
//                                             <>
//                                                 <img
//                                                     src={Hishita} // Replace with actual image path
//                                                     alt="Uber Clone"
//                                                     style={{
//                                                         width: '50px',
//                                                         height: '50px',
//                                                         marginTop: '10px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         position: 'absolute',
//                                                         top: '10%',
//                                                         right: '10%'
//                                                     }}
//                                                 />
//                                                 <p
//                                                     style={{
//                                                         fontSize: '6px',
//                                                         marginTop: '5px',
//                                                         transition: 'opacity 0.3s ease-in-out',
//                                                         width: '50%',
//                                                         textAlign: 'left'
//                                                     }}
//                                                     className="cousine-regular"
//                                                 >
//                                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis suscipit quam obcaecati nisi
//                                                     consectetur doloremque vitae libero, quisquam quo laborum molestiae reprehenderit
//                                                 </p>
//                                             </>
//                                         )}
//                                     </p>
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
//                 </>
//             )}
//         </Screen>
//     )
// }


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PerspectiveCamera, Html, Text } from '@react-three/drei';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Screen } from './Screen';
import * as dat from 'dat.gui';

// Separate components for better code organization and performance
const TitleBarButton = React.memo(({ Icon, style }) => (
  <div
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
    <Icon style={{ ...style }} />
  </div>
));

const ProjectCard = React.memo(({ 
  id, 
  title, 
  description, 
  image, 
  isExpanded, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}) => {
  const cardStyle = useMemo(() => ({
    borderBottom: '0.1px solid #000',
    padding: '2px',
    cursor: 'pointer',
    position: 'relative',
    height: isExpanded || isHovered ? 'auto' : '30px',
    transition: 'height 0.3s ease-in-out',
    paddingBottom: isExpanded || isHovered ? '10px' : '0',
    overflow: 'hidden',
    textAlign: 'center'
  }), [isExpanded, isHovered]);

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(id)}
      className='bungee-regular'
    >
      <p style={{
        fontSize: isExpanded || isHovered ? '8px' : '16px'
      }}>{title}</p>
      {(isExpanded || isHovered) && (
        <div>
          <img
            src={image}
            alt={title}
            style={{
              width: '50px',
              height: '50px',
              marginTop: '10px',
              transition: 'opacity 0.3s ease-in-out',
              position: 'absolute',
              top: '10%',
              right: '10%'
            }}
          />
          <p
            style={{
              fontSize: '6px',
              marginTop: '5px',
              transition: 'opacity 0.3s ease-in-out',
              width: '50%',
              textAlign: 'left'
            }}
            className="cousine-regular"
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
});

// Main component
export const AchievementsScreen = React.memo((props) => {
  const [showHtml, setShowHtml] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [textPosition,setTextPosition] = useState({ x: -3.2, y: 0.8, z: 0 });
  const [textRotation,setTextRotation] = useState({ x: 0, y: 0, z: 0 });

  // Memoized project data
  const projects = useMemo(() => [
    {
      id: 'uber',
      title: 'Uber Clone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: props.images.Hishita
    },
    {
      id: 'aura',
      title: 'AURA ai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: props.images.Hishita
    },
    {
      id: 'sip',
      title: 'Sip & Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit... Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: props.images.Hishita
    },
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit... Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: props.images.Hishita
    }
  ], [props.images]);

  // Memoized handlers
  const handleMouseEnter = useCallback((id) => {
    setHovered(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
  }, []);

  const handleClick = useCallback((id) => {
    setExpanded(prev => prev === id ? null : id);
  }, []);

  // Screen change effect
  useEffect(() => {
    const handleScreenChange = (event) => {
      if (event.detail.screenName === 'Achievements') {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setShowHtml(true);
          setIsTransitioning(false);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setShowHtml(false);
      }
    };

    window.addEventListener('changeScreen', handleScreenChange);
    return () => window.removeEventListener('changeScreen', handleScreenChange);
  }, []);

  // Memoized styles
  const containerStyles = useMemo(() => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#C0C0C0',
    border: '1px solid #000',
    fontFamily: 'Tahoma, sans-serif',
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5px',
  }), []);

  const titleBarStyles = useMemo(() => ({
    backgroundColor: '#000080',
    color: '#FFFFFF',
    padding: '1.5px 2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }), []);

  const titleTextStyles = useMemo(() => ({
    padding: '0',
    fontSize: '6px',
  }), []);

  const menuBarStyles = useMemo(() => ({
    backgroundColor: '#C0C0C0',
    color: '#000000',
    padding: '1.5px 1px',
    fontSize: '5px',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  }), []);

  const contentAreaStyles = useMemo(() => ({
    backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url("../src/assets/round.png")
  ` ,  // Replace with your image URL
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundPosition: 'center', // Centers the imag
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundColor: '#FFFFFF', // Fallback background color
    backgroundOpacity:'0.1',
    color: '#000000',
    padding: '20px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    whiteSpace: 'pre-wrap',
    flexGrow: 1,
    border: '1px solid #808080',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
    width: '100%',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    justifyContent: 'center',
    alignItems: 'center'
  }), []);


  const buttonContainerStyles = useMemo(() => ({
    display: 'flex',
    gap: '2px',
  }), []);

   

    
    //     // text controls
    // useEffect(() => { 
    //     if (!showHtml) {
    //         const gui = new dat.GUI({ name: 'HTML Controls' });

    //         const posFolder = gui.addFolder('HTML Position');

    //         posFolder.add(textPosition, 'x', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, x: value }));
    //         });
    //         posFolder.add(textPosition, 'y', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, y: value }));
    //         });
    //         posFolder.add(textPosition, 'z', -3, 20, 0.1).onChange((value) => {
    //             setTextPosition(prev => ({ ...prev, z: value }));
    //         });

    //         const rotFolder = gui.addFolder('HTML Rotation');
    //         rotFolder.add(textRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, x: value }));
    //         });
    //         rotFolder.add(textRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, y: value }));
    //         });
    //         rotFolder.add(textRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setTextRotation(prev => ({ ...prev, z: value }));
    //         });

    //         // const scaleFolder = gui.addFolder('HTML Scale');
    //         // scaleFolder.add({ scale: textScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
    //         //     setTextScale(value);
    //         // });

    //         posFolder.open();
    //         // scaleFolder.open();

    //         return () => {
    //             gui.destroy();
    //         };
    //     }
    // }, [!showHtml]);

  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['#6C63FF']} />
      
      {showHtml && !isTransitioning ? (
        <Html
          transform
          scale={props.htmlScale || 1}
          position={props.htmlPos || [0, 0, 0]}
          rotation={props.htmlRot || [0, 0, 0]}
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
          <div style={containerStyles}>
            {/* Title Bar */}
            <div style={titleBarStyles}>
              <span style={titleTextStyles}>
                C:\Users\Hishita Gupta\Life\Projects.txt
              </span>
              <div style={buttonContainerStyles}>
                <TitleBarButton 
                  Icon={FaRegWindowMinimize} 
                  style={{ width: '6px', height: '1px', backgroundColor: '#fff' }} 
                />
                <TitleBarButton 
                  Icon={FaRegWindowMaximize} 
                  style={{ width: '6px', height: '6px', color: 'black' }} 
                />
                <TitleBarButton 
                  Icon={IoMdClose} 
                  style={{ width: '6px', height: '6px', color: '#000000' }} 
                />
              </div>
            </div>

            {/* Menu Bar */}
            <div style={menuBarStyles}>
              {['Me', 'Edit', 'Search', 'Help'].map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {/* Content Area */}
            <div style={contentAreaStyles}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '100%' }}>
                {projects.map(project => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    isExpanded={expanded === project.id}
                    isHovered={hovered === project.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </Html>
      ) : (
        <>
          <ambientLight intensity={Math.PI / 2} />
          <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
          <pointLight decay={0} position={[-10, -10, -10]} />
          <Text
                                  fontSize={0.4}
                                  letterSpacing={-0.1}
                                  color='black'
                                  scale={props.textScale || 1}
                                  position={[textPosition.x, textPosition.y, textPosition.z]}
                                  rotation={[textRotation.x, textRotation.y, textRotation.z]}
                                  font="/Inter-Medium.woff"
                              >
                                  Projects
                              </Text>
        </>
      )}
    </Screen>
  );
});


