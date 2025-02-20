import { useState, useEffect, useRef } from "react";
import keypress2 from "../assets/keypressB.mp3";
import { useLoading } from '../context/LoadingContext';

function Preloader() {
  const { setIsLoaded } = useLoading();
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
    { text: "[BOOTING SYSTEM...]", type: "command" },
    { text: "[NEURAL LINK ESTABLISHED]", type: "command" },
    { text: "Welcome, traveler.", type: "story" },
    { text: "I am Byte, the keeper of this archive.", type: "story" },
    { text: "These machines were silent. Forgotten.", type: "story" },
    { text: "Until she rebuilt them.", type: "story" },
    { text: "Hishita Gupta. Architect of this world.", type: "story" },
    { text: "[LOADING DATABASE...]", type: "command" },
    // { text: "Fragments of code. Sparks of innovation.", type: "story" },
    { text: "Step in. See for yourself.", type: "story" },
    { text: "[ACCESS GRANTED]", type: "command" },
    // { text: "This is more than data.", type: "story" },
    // { text: "It's a doorway.", type: "story" },
    
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
        }, Math.random() * 10 + 20);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev + "\n" + lineBuffer);
          setLineBuffer("");
          setCurrentIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 50);
      }
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, currentIndex]);

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
      <div className="relative w-[100vw] pt-10 sm:pt-10 lg:pt-4 h-full sm:w-[100vw] p-4 sm:p-6 text-green-400 font-mono text-sm sm:text-lg leading-relaxed rounded-lg shadow-green-500/40 overflow-hidden transition-all duration-150 screen-curved">
        <pre className="whitespace-pre-line text-[3vw] sm:text-[1.2rem] ">
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
