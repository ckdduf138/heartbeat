
import { Heart, Users, MessageCircle, User } from 'lucide-react';

interface HeaderProps {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

export const Header = ({
  title,
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
}: HeaderProps) => {
  // 각 페이지별 헤더 아이콘+타이틀
  let icon = null;
  let label = title;
  if (title === '홈') {
    icon = <Heart size={28} className="text-primary" fill="#F87171" stroke="#E11D48" strokeWidth={2} />;
    label = 'heartbeat';
  } else if (title === '매칭') {
    icon = <Users size={24} className="text-primary" />;
  } else if (title === '채팅') {
    icon = <MessageCircle size={24} className="text-primary" />;
  } else if (title === '마이페이지') {
    icon = <User size={24} className="text-primary" />;
  }
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-primary/10 flex items-center justify-start px-4 z-50 safe-area-top">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-2xl font-extrabold text-primary-dark tracking-tight ml-2 select-none">{label}</span>
      </div>
    </header>
  );
};
