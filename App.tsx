
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import { ValentineInvitation } from './components/ValentineInvitation';
import { HeartfeltLetter } from './components/HeartfeltLetter';
import { FloatingHearts } from './components/FloatingHearts';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.INVITATION);

  const handleYes = () => {
    setView(AppState.LETTER);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-rose-50 flex items-center justify-center p-4">
      <FloatingHearts />
      
      <div className="z-10 w-full max-w-4xl mx-auto">
        {view === AppState.INVITATION ? (
          <ValentineInvitation onYes={handleYes} />
        ) : (
          <HeartfeltLetter />
        )}
      </div>
    </div>
  );
};

export default App;
