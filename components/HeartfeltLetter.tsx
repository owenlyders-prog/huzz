
import React, { useEffect, useState } from 'react';

export const HeartfeltLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // YOU CAN EDIT YOUR PERSONAL LETTER HERE
  const personalLetter = `Dear Gorgeous Baby Girl,

Since the day we first met I have always wanted you. You always stole my attention whenever you were around. You are the baddiest baddie of them all.

You are my favorite person in the world and I feel so lucky to have you in my life.

I wanted to make this special just for you because you deserve the world. Thank you for being my sweet cheeks and someone that I can always turn to. I love you with all my heart Grace. 

Will you be my Valentines?`;

  useEffect(() => {
    triggerConfetti();
    setTimeout(() => setIsOpen(true), 100);
  }, []);

  const triggerConfetti = () => {
    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fff'];
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'fixed z-50 pointer-events-none';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = '-20px';
      p.style.width = '10px';
      p.style.height = '10px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = '50%';
      p.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className={`transition-all duration-1000 ease-in-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} w-full max-w-2xl`}>
        <div className="bg-white rounded-xl shadow-2xl border border-rose-100 overflow-hidden">
          <div className="bg-rose-500 h-2 w-full"></div>
          <div className="p-8 md:p-12 relative">
             <div className="absolute top-4 right-4 text-rose-100">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 rotate-12" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
             </div>
             
             <h2 className="text-3xl font-bold text-rose-600 mb-8 font-cursive border-b border-rose-100 pb-4">
               My Valentine...
             </h2>
             
             <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-medium font-serif italic">
               {personalLetter}
             </div>
             
             <div className="mt-12 text-right">
               <p className="text-rose-400 font-cursive text-2xl">Forever yours,</p>
               <p className="text-rose-600 font-bold text-xl mt-1">Owen! ❤️</p>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
