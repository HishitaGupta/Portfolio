import React from 'react';

const SoundPopup = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-black/80 border-2 border-green-400 p-6 rounded-lg max-w-md w-full mx-4 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
        <h2 className="text-green-400 text-xl font-mono mb-4">🎵 Enable Sound?</h2>
        <p className="text-green-300/80 font-mono text-sm mb-6">
          This experience includes background music and sound effects. Would you like to enable audio?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onDecline}
            className="px-4 py-2 text-green-400/80 hover:text-green-400 font-mono text-sm transition-colors"
          >
            No Thanks
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-green-400/20 hover:bg-green-400/30 
              text-green-400 border border-green-400 rounded-md 
              transition-all duration-300 font-mono text-sm"
          >
            Enable Sound
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundPopup; 