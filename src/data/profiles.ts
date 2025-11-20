export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  interests: string[];
  mbti: string;
  job: string;
  image: string;
}


export const myProfile: Profile = {
  id: 1,
  name: '하영',
  age: 28,
  location: '서울 강남구',
  distance: '2km',
  bio: '맛집 탐방과 카페 투어를 좋아해요 ☕️',
  interests: ['여행', '카페', '맛집', '운동'],
  mbti: 'ABBA',
  job: '마케터',
  image: 'https://i.pinimg.com/236x/c9/96/51/c99651d00e86d482fcebe0945aa82e2e.jpg',
};

export const profiles: Profile[] = [
  {
    id: 2,
    name: '민수',
    age: 28,
    location: '경기 성남시',
    distance: '5km',
    bio: '운동과 영화 보는 걸 좋아합니다 🎬',
    interests: ['운동', '영화', '음악', '독서'],
    mbti: 'CCCC', // 🧘 신중한 사색가
    job: '개발자',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
  {
    id: 3,
    name: '수진',
    age: 25,
    location: '인천 연수구',
    distance: '8km',
    bio: '반려동물과 함께하는 삶을 즐겨요 🐶',
    interests: ['반려동물', '요리', '독서', '음악'],
    mbti: 'AAAB', // 💕 다정한 케어러
    job: '디자이너',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];
