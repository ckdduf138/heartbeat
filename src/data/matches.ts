export interface Match {
  id: number;
  name: string;
  age: number;
  image: string;
  lti: string;
  bio: string;
  matchedAt: string;
}

export const matches: Match[] = [
  {
    id: 2,
    name: '민수',
    age: 28,
    image: 'https://i.pinimg.com/236x/b8/19/e4/b819e42f82abd1d9820f00cbbb017ed2.jpg',
    lti: 'HSIE',
    bio: '운동과 영화 보는 걸 좋아합니다 🎬',
    matchedAt: '1일 전',
  },
  {
    id: 3,
    name: '수진',
    age: 25,
    image: 'https://i.pinimg.com/236x/c8/5f/73/c85f7329daa2c6e5231271d34fb04e75.jpg',
    lti: 'OMDA',
    bio: '반려동물과 함께하는 삶을 즐겨요 🐶',
    matchedAt: '3일 전',
  },
  {
    id: 4,
    name: '세연',
    age: 28,
    image: 'https://i.pinimg.com/474x/cc/8d/95/cc8d95d761a3a09ef25998545ddbd691.jpg',
    lti: 'HMDE',
    bio: '매 순간 진심이에요 ❤️',
    matchedAt: '5일 전',
  },
  {
    id: 5,
    name: '유진',
    age: 24,
    image: 'https://i.pinimg.com/474x/8c/20/42/8c204227b0bdad3d08a943aeca5fd0a1.jpg',
    lti: 'OSIE',
    bio: '새로운 경험을 좋아하는 자유로운 영혼!',
    matchedAt: '1주 전',
  },
  {
    id: 6,
    name: '현우',
    age: 29,
    image: 'https://i.pinimg.com/474x/97/97/7f/97977f8e1756c16d55b7fbf7cd343640.jpg',
    lti: 'HSIA',
    bio: '운동과 여행을 사랑하는 긍정파!',
    matchedAt: '2주 전',
  },
  {
    id: 7,
    name: '소연',
    age: 23,
    image: 'https://i.pinimg.com/236x/9d/22/50/9d2250632b4a82e6987190c462117feb.jpg',
    lti: 'OMIE',
    bio: '음악과 카페를 좋아하는 감성러',
    matchedAt: '3주 전',
  },
];
