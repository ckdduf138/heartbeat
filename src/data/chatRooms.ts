export interface ChatRoom {
  id: number;
  name: string;
  age: number;
  image: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

export const chatRooms: ChatRoom[] = [
  {
    id: 1,
    name: '지현',
    age: 26,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    lastMessage: '네, 좋아요! 😊',
    timestamp: '방금 전',
    unread: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: '민수',
    age: 28,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    lastMessage: '주말에 시간 되세요?',
    timestamp: '10분 전',
    unread: 0,
    isOnline: false,
  },
  {
    id: 3,
    name: '수진',
    age: 25,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    lastMessage: '안녕하세요! 반가워요',
    timestamp: '1시간 전',
    unread: 1,
    isOnline: true,
  },
  {
    id: 4,
    name: '하영',
    age: 27,
    image: 'https://i.pinimg.com/236x/c9/96/51/c99651d00e86d482fcebe0945aa82e2e.jpg',
    lastMessage: '사진 잘 봤어요! 😄',
    timestamp: '2시간 전',
    unread: 0,
    isOnline: false,
  },
  {
    id: 5,
    name: '유진',
    age: 24,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: '오늘 저녁에 뭐해요?',
    timestamp: '3시간 전',
    unread: 3,
    isOnline: true,
  },
  {
    id: 6,
    name: '현우',
    age: 29,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'ㅋㅋㅋ 완전 웃겨',
    timestamp: '어제',
    unread: 0,
    isOnline: false,
  },
  {
    id: 7,
    name: '소연',
    age: 23,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessage: '좋은 하루 보내요~',
    timestamp: '2일 전',
    unread: 0,
    isOnline: false,
  },
];
