import { Header } from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import React from 'react';
import { Heart } from 'lucide-react';
import { myProfile } from '@/data/profiles';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 px-4 pb-24">
      <Header title="홈" />
      <div className="flex flex-col items-center mb-5">
        <div className="w-32 h-32 rounded-full border-4 border-primary shadow-lg overflow-hidden mb-3">
          <img
            src={myProfile.image}
            alt={myProfile.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl font-bold text-primary-dark">{myProfile.name}</span>
          <span className="text-lg text-primary">{myProfile.age}</span>
        </div>
        <div className="text-sm text-primary-dark font-medium mb-2">{myProfile.job} · {myProfile.location}</div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="px-4 py-2 bg-primary/10 text-primary-dark rounded-full font-bold flex items-center gap-2 text-base shadow">
          <Heart size={16} className="text-primary" />
          내 LTI:
          <span className="ml-2 text-primary font-extrabold">{myProfile.lti}</span>
        </div>
      </div>

      {/* 소개글 */}
      <div className="w-full max-w-md bg-primary/5 rounded-2xl shadow-md p-6 mb-4">
        <p className="text-base leading-relaxed text-primary-dark text-center">{myProfile.bio}</p>
      </div>

      {/* 관심사 해시태그 */}
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {myProfile.interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
          >
            #{interest}
          </span>
        ))}
      </div>

      {/* 이상형 MBTI 다시 하러가기 버튼 */}
      <div className="flex justify-center mt-2">
        <Link
          to="/ideal-type-test"
          className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-md text-base transition hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(90deg, #3ed4be 0%, #2ab5a0 100%)' }}
        >
          이상형 MBTI 하러가기
        </Link>
      </div>
    </div>
  );
};
