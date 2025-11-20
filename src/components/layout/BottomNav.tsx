import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, MessageCircle, User } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/home', icon: Home, label: '홈' },
    { path: '/match', icon: Heart, label: '매칭' },
    { path: '/chat', icon: MessageCircle, label: '채팅' },
    { path: '/mypage', icon: User, label: '마이' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-50 safe-area-bottom">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const IconComponent = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              isActive ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <IconComponent size={24} className="mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
