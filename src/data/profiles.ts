export interface Profile {
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  interests: string[];
  lti: string;
  job: string;
  image: string;
}


export const myProfile: Profile = {
  name: '하영',
  age: 28,
  location: '서울 강남구',
  distance: '2km',
  bio: '맛집 탐방과 카페 투어를 좋아해요 ☕️',
  interests: ['여행', '카페', '맛집', '운동'],
  lti: 'HSIE',
  job: '마케터',
  image: 'https://i.pinimg.com/236x/c9/96/51/c99651d00e86d482fcebe0945aa82e2e.jpg',
};