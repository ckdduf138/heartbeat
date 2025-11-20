import { Header } from '@/components/layout/Header';
// import { Header } from '@/components/layout/Header';
import { MessageCircle } from 'lucide-react';
import { chatRooms } from '@/data/chatRooms';

export const Chat = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header title="채팅" />
      {/* 헤더 제거 */}
      <div className="pt-16 pb-20 px-0">
        <div className="max-w-md mx-auto">
          {/* DM 리스트 */}
          <div className="bg-white">
            {chatRooms.map((room) => (
              <button
                key={room.id}
                className="w-full flex items-center gap-4 px-5 py-4 focus:outline-none hover:bg-gray-50 transition group"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 ${room.isOnline ? 'border-primary' : 'border-primary-light'} shadow group-hover:shadow-lg transition-shadow`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 text-left flex flex-col justify-center">
                  <div className="flex items-center mb-0.5">
                    <span className="font-semibold text-primary-dark text-base truncate max-w-[120px] group-hover:text-primary">{room.name}</span>
                    <span className="ml-auto text-xs text-primary font-medium whitespace-nowrap pl-2 group-hover:text-primary-dark">{room.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm truncate flex-1 text-black group-hover:text-primary">{room.lastMessage}</p>
                    {room.unread > 0 && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-primary text-white text-xs font-bold shadow">
                        {room.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {/* 채팅 없을 때 */}
          {chatRooms.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <MessageCircle size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">아직 대화가 없어요</p>
              <p className="text-sm text-gray-400 mt-2">
                매칭된 사람과 대화를 시작해보세요
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
