export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: string;
  }[];
}

export interface IdealTypeResult {
  code: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: string[];
}

export const idealTypeQuestions: Question[] = [
  {
    id: 1,
    question: '이상적인 첫 데이트 장소는?',
    options: [
      { text: '조용한 카페에서 깊은 대화', type: 'A' },
      { text: '핫플레이스 맛집 투어', type: 'B' },
      { text: '야외 액티비티나 스포츠', type: 'C' },
      { text: '전시회나 공연 관람', type: 'D' },
    ],
  },
  {
    id: 2,
    question: '연애할 때 나는?',
    options: [
      { text: '매일 연락하고 자주 만나고 싶다', type: 'A' },
      { text: '적당한 거리두기가 필요하다', type: 'B' },
      { text: '상황에 따라 유동적으로', type: 'C' },
      { text: '깊은 대화보다 함께 하는 시간', type: 'D' },
    ],
  },
  {
    id: 3,
    question: '상대방에게 가장 중요한 것은?',
    options: [
      { text: '감성적 교감과 공감', type: 'A' },
      { text: '유머 감각과 즐거움', type: 'B' },
      { text: '안정감과 책임감', type: 'C' },
      { text: '가치관과 인생 비전', type: 'D' },
    ],
  },
  {
    id: 4,
    question: '갈등이 생기면?',
    options: [
      { text: '바로 풀고 싶다', type: 'A' },
      { text: '시간을 두고 생각한다', type: 'B' },
      { text: '논리적으로 대화한다', type: 'C' },
      { text: '감정을 먼저 표현한다', type: 'D' },
    ],
  },
  {
    id: 5,
    question: '주말에 하고 싶은 데이트는?',
    options: [
      { text: '집에서 넷플릭스와 휴식', type: 'A' },
      { text: '새로운 곳 탐험', type: 'B' },
      { text: '운동이나 야외활동', type: 'C' },
      { text: '맛집이나 카페 투어', type: 'D' },
    ],
  },
];

export const idealTypeResults: Record<string, IdealTypeResult> = {
  AAAA: {
    code: 'AAAA',
    title: '🌸 감성 로맨티스트',
    description: '깊은 감정 교류를 중시하며, 따뜻하고 로맨틱한 관계를 꿈꾸는 유형입니다.',
    traits: ['감성적', '로맨틱', '헌신적', '공감능력'],
    compatibility: ['BBBB', 'CCCC'],
  },
  AAAB: {
    code: 'AAAB',
    title: '💕 다정한 케어러',
    description: '상대방을 세심하게 배려하고 돌보는 것을 좋아하는 유형입니다.',
    traits: ['배려심', '친절함', '안정감', '책임감'],
    compatibility: ['BBBA', 'CCCD'],
  },
  AABA: {
    code: 'AABA',
    title: '🎨 감성 예술가',
    description: '예술적 감각과 감성을 중시하며 특별한 경험을 추구하는 유형입니다.',
    traits: ['창의적', '감수성', '독창적', '예술적'],
    compatibility: ['BBAB', 'DDDD'],
  },
  AABB: {
    code: 'AABB',
    title: '🌙 꿈꾸는 이상주의자',
    description: '이상적인 사랑을 꿈꾸며 깊은 정서적 연결을 원하는 유형입니다.',
    traits: ['이상주의', '낭만적', '진지함', '몽환적'],
    compatibility: ['BBAA', 'CCCC'],
  },
  ABAA: {
    code: 'ABAA',
    title: '☀️ 밝은 에너자이저',
    description: '긍정적이고 활기찬 에너지로 관계를 밝게 만드는 유형입니다.',
    traits: ['긍정적', '활발함', '사교적', '유머러스'],
    compatibility: ['BABB', 'CAAA'],
  },
  ABAB: {
    code: 'ABAB',
    title: '🎭 유연한 적응자',
    description: '상황에 따라 유연하게 대처하며 균형을 중시하는 유형입니다.',
    traits: ['유연함', '균형감', '적응력', '중도적'],
    compatibility: ['BABA', 'CBCB'],
  },
  ABBA: {
    code: 'ABBA',
    title: '🌟 매력적인 소통가',
    description: '대화를 즐기고 다양한 활동을 함께하는 것을 좋아하는 유형입니다.',
    traits: ['소통능력', '매력적', '활동적', '외향적'],
    compatibility: ['BAAB', 'DCBA'],
  },
  ABBB: {
    code: 'ABBB',
    title: '🎪 자유로운 탐험가',
    description: '새로운 것을 시도하고 자유로운 관계를 선호하는 유형입니다.',
    traits: ['자유로움', '모험적', '개방적', '즉흥적'],
    compatibility: ['BAAA', 'DDDC'],
  },
  BAAA: {
    code: 'BAAA',
    title: '🏃 활동적인 모험가',
    description: '액티브한 데이트와 도전을 즐기는 에너지 넘치는 유형입니다.',
    traits: ['활동적', '도전적', '열정적', '적극적'],
    compatibility: ['ABBB', 'CCCD'],
  },
  BAAB: {
    code: 'BAAB',
    title: '🎯 목표 지향형',
    description: '함께 성장하고 목표를 이루는 관계를 추구하는 유형입니다.',
    traits: ['계획적', '성실함', '목표지향', '발전적'],
    compatibility: ['ABBA', 'CBCD'],
  },
  BABA: {
    code: 'BABA',
    title: '🌍 세상 탐험가',
    description: '여행과 새로운 경험을 통해 관계를 발전시키는 유형입니다.',
    traits: ['탐험적', '호기심', '개방적', '경험중시'],
    compatibility: ['ABAB', 'DADA'],
  },
  BABB: {
    code: 'BABB',
    title: '🎉 즐거운 파티러버',
    description: '함께 즐기고 웃는 것을 가장 중요하게 생각하는 유형입니다.',
    traits: ['즐거움', '유머', '사교적', '낙천적'],
    compatibility: ['ABAA', 'DCDC'],
  },
  BBAA: {
    code: 'BBAA',
    title: '🌈 다채로운 크리에이터',
    description: '창의적이고 독특한 데이트를 기획하는 것을 좋아하는 유형입니다.',
    traits: ['창의적', '독특함', '기획력', '트렌디'],
    compatibility: ['AABB', 'DDDD'],
  },
  BBAB: {
    code: 'BBAB',
    title: '🎬 문화 애호가',
    description: '문화생활과 취미를 함께 즐기는 것을 중시하는 유형입니다.',
    traits: ['문화적', '지적', '교양있음', '취향존중'],
    compatibility: ['AABA', 'DDDC'],
  },
  BBBA: {
    code: 'BBBA',
    title: '🍀 편안한 일상파',
    description: '일상의 소소한 행복을 함께 나누는 것을 좋아하는 유형입니다.',
    traits: ['편안함', '안정적', '현실적', '따뜻함'],
    compatibility: ['AAAB', 'CCCC'],
  },
  BBBB: {
    code: 'BBBB',
    title: '🌺 조화로운 파트너',
    description: '서로 존중하고 균형 잡힌 관계를 추구하는 유형입니다.',
    traits: ['균형감', '존중', '성숙함', '이해심'],
    compatibility: ['AAAA', 'CCCD'],
  },
  CCCC: {
    code: 'CCCC',
    title: '🧘 신중한 사색가',
    description: '깊이 있는 대화와 진지한 관계를 선호하는 유형입니다.',
    traits: ['신중함', '진지함', '사려깊음', '성찰적'],
    compatibility: ['AAAA', 'BBBA'],
  },
  DDDD: {
    code: 'DDDD',
    title: '💎 완벽주의 이상가',
    description: '높은 기준과 가치관을 중시하며 의미 있는 관계를 추구하는 유형입니다.',
    traits: ['완벽주의', '가치관', '진정성', '깊이'],
    compatibility: ['AABA', 'BBAA'],
  },
};
