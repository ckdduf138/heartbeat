import { Header } from '@/components/layout/Header';
import { MessageCircle } from 'lucide-react';
import { matches } from '@/data/matches';

export const Match: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 px-4 pb-24">
      <Header title="매칭" />
      <div className="w-full">
        <div className="max-w-md mx-auto">
          <div className="mb-6 px-5">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">매칭된 친구</h2>
            <p className="text-primary/70 text-sm">회원님의 이상형 LTI를 바탕으로 추천 친구를 모아봤어요!</p>
          </div>
          <div className="divide-y divide-gray-100">
            {matches.map((match) => (
              <div
                key={match.id}
                className="flex items-center gap-3 px-3 py-2 bg-white rounded-xl border border-gray-100 mb-2 hover:shadow transition cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-light flex items-center justify-center">
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-base text-primary-dark truncate max-w-[90px]">{match.name}</span>
                    <span className="text-sm text-gray-500 font-medium">{match.age}</span>
                    <span className="ml-2 px-3 py-0.5 rounded-full bg-primary text-white font-bold text-sm whitespace-nowrap">{match.lti}</span>
                  </div>
                  <p className="text-xs text-gray-700 truncate max-w-full mt-0.5">{match.bio}</p>
                </div>
                <button className="ml-2 px-3 py-1 rounded-full bg-primary text-white font-bold flex items-center gap-1 text-sm shadow-sm hover:bg-primary-dark transition">
                  <MessageCircle size={15} />
                  <span className="hidden sm:inline">채팅</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
