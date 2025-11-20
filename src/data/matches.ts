export interface Match {
  id: number;
  name: string;
  age: number;
  image: string;
  mbti: string;
  bio: string;
  matchedAt: string;
}

export const matches: Match[] = [
  {
    id: 2,
    name: '민수',
    age: 28,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    mbti: 'CCCC',
    bio: '운동과 영화 보는 걸 좋아합니다 🎬',
    matchedAt: '1일 전',
  },
  {
    id: 3,
    name: '수진',
    age: 25,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    mbti: 'AAAB',
    bio: '반려동물과 함께하는 삶을 즐겨요 🐶',
    matchedAt: '3일 전',
  },
  {
    id: 4,
    name: '하영',
    age: 28,
    image: 'https://i.pinimg.com/236x/c9/96/51/c99651d00e86d482fcebe0945aa82e2e.jpg',
    mbti: 'ABBA',
    bio: '맛집 탐방과 카페 투어를 좋아해요 ☕️',
    matchedAt: '5일 전',
  },
  {
    id: 5,
    name: '유진',
    age: 24,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    mbti: 'BBAA',
    bio: '새로운 경험을 좋아하는 자유로운 영혼!',
    matchedAt: '1주 전',
  },
  {
    id: 6,
    name: '현우',
    age: 29,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    mbti: 'AABB',
    bio: '운동과 여행을 사랑하는 긍정파!',
    matchedAt: '2주 전',
  },
  {
    id: 7,
    name: '소연',
    age: 23,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    mbti: 'ABAB',
    bio: '음악과 카페를 좋아하는 감성러',
    matchedAt: '3주 전',
  },
];
