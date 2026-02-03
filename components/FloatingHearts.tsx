
import React, { useEffect, useState } from 'react';

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-20), // Keep it performant
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 5 + Math.random() * 10,
          size: 10 + Math.random() * 30,
        }
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart text-rose-200"
          style={{
            left: `${heart.left}%`,
            animation: `float ${heart.duration}s linear forwards`,
            fontSize: `${heart.size}px`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
