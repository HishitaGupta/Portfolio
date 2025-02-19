// import { useState, useEffect } from "react";

// function Preloader({ onLoaded }) {
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [glitch, setGlitch] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);
//   const [lineBuffer, setLineBuffer] = useState("");
//   const [screenFlicker, setScreenFlicker] = useState(false);

//   const story = [
//     { text: "[SYSTEM BOOTING...]", type: "command" },
//     { text: "[NEURAL LINK ESTABLISHED]", type: "command" },
//     { text: "Ah… another traveler arrives.", type: "story" },
//     { text: "I am Byte, the curator of this digital realm.", type: "story" },
//     { text: "Once, these machines were abandoned—silent relics of the past.", type: "story" },
//     { text: "But my creator, Hishita Gupta, breathed life into them...", type: "story" },
//     { text: "Crafting a world where ideas take form, where innovation meets reality.", type: "story" },
//     { text: "Each glowing screen around you holds a fragment of her journey.", type: "story" },
//     { text: "[LOADING MODULES...]", type: "command" },
//     { text: "Skills forged in the depths of code.", type: "story" },
//     { text: "Achievements carved through relentless pursuit.", type: "story" },
//     { text: "Projects that push the boundaries of creation.", type: "story" },
//     { text: "[ACCESS GRANTED...]", type: "command" },
//     { text: "This is more than a showcase. It is a gateway.", type: "story" },
//     { text: "A living archive of ingenuity and progress.", type: "story" },
//     { text: "I will be your guide. Let me show you what she has built.", type: "story" },
//     { text: "[INITIALIZING SYSTEM ACCESS...]", type: "command" },
//     { text: "[LOADING NEXT SEQUENCE...]", type: "command" },
//   ];

//   useEffect(() => {
//     if (currentIndex < story.length) {
//       if (charIndex < story[currentIndex].text.length) {
//         setTimeout(() => {
//           setLineBuffer((prev) => prev + story[currentIndex].text[charIndex]);
//           setCharIndex((prev) => prev + 1);
//         }, Math.random() * 50 + 20); // Randomized typing speed
//       } else {
//         setTimeout(() => {
//           setDisplayText((prev) => prev + "\n" + lineBuffer);
//           setLineBuffer("");
//           setCurrentIndex((prev) => prev + 1);
//           setCharIndex(0);
//         }, 300); // Pause before next line
//       }
//     } else {
//       setTimeout(onLoaded, 2000); // Load main content after last text
//     }
//   }, [charIndex, currentIndex, lineBuffer, onLoaded]);

//   // Flickering & Glitch Effect
//   useEffect(() => {
//     const glitchInterval = setInterval(() => {
//       setGlitch((prev) => !prev);
//     }, Math.random() * 700 + 300);

//     const flickerInterval = setInterval(() => {
//       setScreenFlicker((prev) => !prev);
//     }, Math.random() * 7000 + 2000);

//     return () => {
//       clearInterval(glitchInterval);
//       clearInterval(flickerInterval);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden">
//       {/* CRT Effects */}
//       <div className="absolute inset-0 bg-noise opacity-100 pointer-events-none w-full h-full "></div>
//       <div className="absolute inset-0 bg-crt-lines opacity-20 mix-blend-overlay pointer-events-none w-full h-full"></div>

//       {/* Flickering Effect */}
//       {screenFlicker && (
//         <div className="absolute inset-0 bg-black opacity-30 pointer-events-none transition-opacity duration-200"></div>
//       )}

//       {/* CRT Screen with Curved Effect */}
//       <div className="relative w-[100vw] h-[100vh] p-5 text-green-400 font-mono text-lg leading-relaxed  rounded-[20px] shadow-green-500/40  overflow-hidden transition-all duration-150 screen-curved">
//         <pre className="whitespace-pre-line">
//           {displayText.split("\n").map((line, index) => (
//             <span key={index} className={line.startsWith("[") ? "text-blue-400 opacity-80" : "text-green-400 opacity-80"}>
//               {line}
//               <br />
//             </span>
//           ))}
//         </pre>

//         {/* Active typing line */}
//         <pre className="text-yellow-400 opacity-80">{lineBuffer}▌</pre>
//       </div>
//     </div>
//   );
// }

// export default Preloader;



import { useState, useEffect, useRef } from "react";
import keypress2 from "../assets/keypressB.mp3";

function Preloader({ onLoaded }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [lineBuffer, setLineBuffer] = useState("");
  const [screenFlicker, setScreenFlicker] = useState(false);
  const timeoutRef = useRef(null);

  // Preload typing sound for better performance
  const audio = useRef(new Audio(keypress2));
  audio.current.volume = 0.05;

  const playSound = () => {
    audio.current.currentTime = 0;
    audio.current.play();
  };

  const story = [
    { text: "[SYSTEM BOOTING...]", type: "command" },
    { text: "[NEURAL LINK ESTABLISHED]", type: "command" },
    { text: "Ah… another traveler arrives.", type: "story" },
    { text: "I am Byte, the curator of this digital realm.", type: "story" },
    { text: "Once, these machines were abandoned—silent relics of the past.", type: "story" },
    { text: "But my creator, Hishita Gupta, breathed life into them...", type: "story" },
    { text: "Crafting a world where ideas take form, where innovation meets reality.", type: "story" },
    { text: "Each glowing screen around you holds a fragment of her journey.", type: "story" },
    { text: "[LOADING MODULES...]", type: "command" },
    // { text: "Skills forged in the depths of code.", type: "story" },
    // { text: "Achievements carved through relentless pursuit.", type: "story" },
    // { text: "Projects that push the boundaries of creation.", type: "story" },
    { text: "[ACCESS GRANTED...]", type: "command" },
    { text: "This is more than a showcase. It is a gateway.", type: "story" },
    { text: "A living archive of ingenuity and progress.", type: "story" },
    // { text: "I will be your guide. Let me show you what she has built.", type: "story" },
    { text: "[INITIALIZING SYSTEM ACCESS...]", type: "command" },
    { text: "[LOADING NEXT SEQUENCE...]", type: "command" },
  ];

  useEffect(() => {
    if (currentIndex < story.length) {
      if (charIndex < story[currentIndex].text.length) {
        timeoutRef.current = setTimeout(() => {
          setLineBuffer((prev) => prev + story[currentIndex].text[charIndex]);
          setCharIndex((prev) => prev + 1);
          playSound();
        }, Math.random() * 50 + 20);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev + "\n" + lineBuffer);
          setLineBuffer("");
          setCurrentIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
      }
    } else {
      setTimeout(onLoaded, 2000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, currentIndex, onLoaded]);

  // Flickering Effect (controlled timing)
  useEffect(() => {
    const flickerTimeout = setInterval(() => {
      setScreenFlicker((prev) => !prev);
    }, Math.random() * 4000 + 2000);

    return () => clearInterval(flickerTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden">
      {/* CRT Effects */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none w-full h-full"></div>
      <div className="absolute inset-0 bg-crt-lines opacity-10 mix-blend-overlay pointer-events-none w-full h-full"></div>

      {/* Flickering Effect */}
      {screenFlicker && <div className="absolute inset-0 bg-black opacity-30 pointer-events-none transition-opacity duration-200"></div>}

      {/* CRT Screen Container (Responsive) */}
      <div className="relative w-[100vw]  h-[100vh] sm:w-[100vw] p-4 sm:p-6 text-green-400 font-mono text-sm sm:text-lg leading-relaxed rounded-lg shadow-green-500/40 overflow-hidden transition-all duration-150 screen-curved">
        <pre className="whitespace-pre-line text-[3vw] sm:text-[1.2rem]">
          {displayText.split("\n").map((line, index) => (
            <span key={index} className={line.startsWith("[") ? "text-blue-400 opacity-80" : "text-green-400 opacity-80"}>
              {line}
              <br />
            </span>
          ))}
        </pre>

        {/* Active typing line */}
        <pre className="text-yellow-400 opacity-80 text-[3vw] sm:text-[1.2rem]">{lineBuffer}▌</pre>
      </div>
    </div>
  );
}

export default Preloader;
