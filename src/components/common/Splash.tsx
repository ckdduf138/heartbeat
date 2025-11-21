import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Splash = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => navigate('/home', { replace: true }), 300);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 gradient-primary flex items-center justify-center z-50 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <style>{`
        @keyframes bounce-heart {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.2) translateY(-20px);
          }
        }
        
        @keyframes heart-path {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: var(--path) scale(1);
          }
        }
        
        .main-heart {
          animation: bounce-heart 1s ease-in-out;
          animation-iteration-count: 2;
        }
        
        .heart-particle {
          position: absolute;
          animation: heart-path 1s ease-out;
          animation-iteration-count: 2;
        }
      `}</style>
      <div className="text-center">
        <div className="relative mb-4">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const distance = 100;
            const x = Math.cos((angle * Math.PI) / 180) * distance;
            const y = Math.sin((angle * Math.PI) / 180) * distance;
            return (
              <Heart
                key={i}
                size={20}
                className="heart-particle text-white fill-white"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-10px',
                  marginTop: '-10px',
                  animationDelay: `${i * 0.1}s`,
                  ['--path' as any]: `translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
          <div className="main-heart relative z-10">
            <Heart size={80} className="text-white fill-white mx-auto" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Heartbeat</h1>
        <p className="text-white/80 text-sm">설레는 만남의 시작</p>
      </div>
    </div>
  );
};
