import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = Date.now();
    let frame: number;
    const duration = 2000;
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setPercent(progress);
      if (progress < 100) {
        frame = requestAnimationFrame(animate);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-transparent z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20 mb-4 mx-auto">
          <div className="w-full h-full border-8 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl drop-shadow-lg">
            {percent}%
          </span>
        </div>
        <span className="text-lg font-semibold text-white mt-2 drop-shadow-lg">분석 중...</span>
      </div>
    </div>
  );
};

export default Loader;