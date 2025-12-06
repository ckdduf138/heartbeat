import { Header } from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { myProfile } from '@/data/profiles';
import { ltiData } from '@/data/ltiData';

export const Home: React.FC = () => {
  const myLtiData = ltiData.lti_types.find(type => type.code === myProfile.lti);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 px-4 pb-24">
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

      {/* LTI 메인 카드 */}
      <div className="w-full max-w-md mb-6">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-xl p-6 text-white relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Heart size={20} className="text-white" fill="white" />
              <span className="text-sm font-semibold">나의 이상형 테스트 결과</span>
            </div>
            
            <Link
              to={`/idealTypeResult?result=${myProfile.lti}`}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 mb-4 shadow-md hover:shadow-lg transition-all block"
            >
              <div className="flex items-start gap-4">
                {myLtiData?.icon && (
                  <div className="w-20 h-20 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center p-1 border-2 border-primary">
                    <img
                      src={`/assets/lti/${myLtiData.icon}`}
                      alt={myLtiData.name_ko}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-3xl font-extrabold text-primary mb-2 tracking-wider">{myProfile.lti}</p>
                  <p className="text-sm font-bold text-gray-700 leading-relaxed break-keep">
                    {myLtiData?.name_ko || '이상형 유형'}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/ideal-type-test"
              className="flex items-center justify-between bg-white text-primary-dark rounded-xl px-5 py-3.5 font-bold text-base hover:bg-white/90 transition-all group"
            >
              <span>테스트 다시하기</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 소개글 */}
      <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-sm p-6 mb-4">
        <p className="text-base leading-relaxed text-gray-700 text-center">{myProfile.bio}</p>
      </div>

      {/* 관심사 해시태그 */}
      <div className="flex gap-2 flex-wrap justify-center">
        {myProfile.interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
          >
            #{interest}
          </span>
        ))}
      </div>
    </div>
  );
};
