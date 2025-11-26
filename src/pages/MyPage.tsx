import { Header } from '@/components/layout/Header';
import { myProfile } from '@/data/profiles';
import { LogOut, Bell, Edit, Settings } from 'lucide-react';
import { useCopyLtiResult } from '@/hooks/useCopyLtiResult';
// import { Header } from '@/components/layout/Header';

export const MyPage: React.FC = () => {
  const { copyLtiResult } = useCopyLtiResult();
  const handleCopyProfile = () => {
    copyLtiResult();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title="마이페이지" />
      {/* 헤더 제거 */}
      <div className="pt-20 pb-20 px-4 max-w-md mx-auto flex flex-col items-center">
        {/* 프로필 이미지 */}
        <div className="w-28 h-28 rounded-full border-4 border-primary shadow-lg overflow-hidden mb-3">
          <img
            src={myProfile.image}
            alt={myProfile.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* 이름/직업/위치 */}
        <div className="flex flex-col items-center mb-2">
          <span className="text-2xl font-bold text-primary-dark">{myProfile.name}</span>
          <span className="text-base text-primary mt-1">{myProfile.job} · {myProfile.location}</span>
        </div>
        {/* 소개글 */}
        <div className="w-full bg-primary/5 rounded-xl p-4 mb-3">
          <p className="text-center text-primary-dark text-base">{myProfile.bio}</p>
        </div>
        {/* 관심사 해시태그 */}
        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {myProfile.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
            >
              #{interest}
            </span>
          ))}
        </div>
        {/* 주요 기능 버튼들 */}
        <div className="flex flex-col gap-3 w-full mt-2">
          <button
            className="w-full py-3 rounded-full bg-primary/90 text-white font-bold shadow flex items-center justify-center gap-2 transition hover:scale-105 active:scale-95"
            onClick={handleCopyProfile}
          >
            <Edit size={20} className="text-white" /> 프로필 편집
          </button>
          <button className="w-full py-3 rounded-full bg-primary/10 text-primary-dark font-bold shadow flex items-center justify-center gap-2 transition hover:bg-primary/20 active:scale-95">
            <Bell size={20} className="text-primary" /> 알림
          </button>
          <button className="w-full py-3 rounded-full bg-primary/10 text-primary-dark font-bold shadow flex items-center justify-center gap-2 transition hover:bg-primary/20 active:scale-95">
            <Settings size={20} className="text-primary" /> 설정
          </button>
          <button className="w-full py-3 rounded-full bg-gray-100 text-primary-dark font-bold shadow flex items-center justify-center gap-2 transition hover:bg-primary/10 active:scale-95">
            <LogOut size={20} className="text-primary" /> 로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};
