import React, { useEffect, useState } from 'react';
import usePreloadImages from '@/hooks/usePreloadImages';

type LoaderProps = {
  urls?: string[];
  onReady?: () => void;
  // 최소 표시 시간(ms) — 로딩이 너무 빨리 끝나면 UI 깜빡임 방지
  minDuration?: number;
};

const Loader: React.FC<LoaderProps> = ({ urls, onReady, minDuration = 600 }) => {
  const [percent, setPercent] = useState(0);
  const { loaded, progress } = usePreloadImages(urls ?? [], { strict: false, onProgress: undefined });

  useEffect(() => {
    if (urls && urls.length > 0) {
      // use progress from hook
      setPercent(Math.round((progress || 0) * 100));
    } else {
      // fallback animation when no urls provided
      let start = Date.now();
      let frame: number;
      const duration = 2000;
      const animate = () => {
        const elapsed = Date.now() - start;
        const p = Math.min(100, Math.round((elapsed / duration) * 100));
        setPercent(p);
        if (p < 100) {
          frame = requestAnimationFrame(animate);
        }
      };
      animate();
      return () => cancelAnimationFrame(frame);
    }
  }, [urls, progress]);

  useEffect(() => {
    if (urls && urls.length > 0 && loaded) {
      const t = setTimeout(() => onReady?.(), minDuration);
      return () => clearTimeout(t);
    }
    if (!urls || urls.length === 0) return;
  }, [loaded, urls, onReady, minDuration]);

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