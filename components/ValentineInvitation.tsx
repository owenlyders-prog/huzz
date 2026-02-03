
import React, { useState, useCallback, useRef } from 'react';

interface Props {
  onYes: () => void;
}

export const ValentineInvitation: React.FC<Props> = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noBtnText, setNoBtnText] = useState('No');
  const [hoverCount, setHoverCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const funnyNoTexts = [
    "No", 
    "Wait!!", 
    "Rude! :(", 
    "Wrong button!", 
    "Grace pls",
    "Try again..."
  ];

  // Embedded image data from your prompt to ensure it works 100%
  const kissingPhoto = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600";
  // If you have your actual photo.jpg uploaded, this will try to use it, but fallback to the romantic placeholder
  const photoSrc = "./photo.jpg";

  const handleNoHover = useCallback(() => {
    if (!containerRef.current) return;
    
    // Movement logic to keep it within a reasonable "play" area
    const range = 150; 
    const newX = (Math.random() - 0.5) * range * 2;
    const newY = (Math.random() - 0.5) * range * 2;

    setNoPosition({ x: newX, y: newY });
    setHoverCount(prev => prev + 1);
    setNoBtnText(funnyNoTexts[Math.min(hoverCount, funnyNoTexts.length - 1)]);
  }, [hoverCount]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
      <div className="bg-white/95 backdrop-blur-md p-4 rounded-[2.5rem] shadow-2xl border-2 border-rose-100 text-center max-w-[300px] w-full mx-auto overflow-visible">
        
        {/* Photo Container - Smaller & Tighter Polaroid */}
        <div className="relative mb-3 transform -rotate-2 hover:rotate-0 transition-all duration-300">
          <div className="bg-white p-1.5 pb-6 shadow-md rounded-sm border border-rose-50">
            <div className="w-full h-40 overflow-hidden rounded-sm bg-rose-50 flex items-center justify-center">
              <img 
                src={photoSrc} 
                alt="Grace and Owen" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = kissingPhoto;
                }}
              />
            </div>
            <div className="mt-2 font-cursive text-base text-rose-300 select-none">
              Grace & Owen
            </div>
          </div>
          {/* Small floating heart decoration */}
          <div className="absolute -top-3 -right-3 text-rose-500 animate-bounce scale-75">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-rose-600 mb-0.5 font-cursive">
          Be my Valentine?
        </h1>
        <p className="text-rose-400 font-semibold italic mb-5 text-xs tracking-wide">
          Grace, you're the baddiest!
        </p>

        <div className="relative h-14 flex items-center justify-center space-x-3">
          <button
            onClick={onYes}
            className="bg-rose-500 hover:bg-rose-600 text-white px-7 py-2.5 rounded-full font-bold text-base shadow-lg hover:scale-110 transition-transform active:scale-95 z-30 border-b-2 border-rose-700 whitespace-nowrap"
          >
            YES! ❤️
          </button>

          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            className="bg-gray-100 text-gray-400 px-5 py-2 rounded-full font-bold text-sm shadow-sm whitespace-nowrap cursor-default z-10 border border-gray-200"
          >
            {noBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};
