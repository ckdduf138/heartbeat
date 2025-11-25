export type QuestionOption = {
  text: string;
  value: string;
  weight: number;
};

export type Question = {
  category: string;
  flow: string;
  question: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    category: "관계 목적",
    flow: "연애에서 얻고 싶은 가치",
    question: "연애를 통해 가장 얻고 싶은 것은?",
    options: [
      { text: "안정감과 신뢰", value: "A", weight: 2 },
      { text: "설렘과 자극", value: "E", weight: 2 },
      { text: "동반자적 관계", value: "M", weight: 2 },
      { text: "자유와 여유", value: "S", weight: 1 },
    ],
  },
  {
    category: "연애 스타일",
    flow: "연락 빈도/방식",
    question: "연애 초반, 연락은 어떻게 하는 게 좋아요?",
    options: [
      { text: "자주 연락하며 친밀감 쌓기", value: "M", weight: 2 },
      { text: "필요할 때만 연락", value: "S", weight: 2 },
      { text: "상대가 먼저 연락할 때까지 기다림", value: "I", weight: 2 },
      { text: "즉각적으로 답장함", value: "D", weight: 1 },
    ],
  },
  {
    category: "관계 시작 방식",
    flow: "첫 만남 주도권",
    question: "처음 만남을 제안할 때, 어떤 스타일이 더 편한가요?",
    options: [
      { text: "내가 먼저 제안하는 편", value: "D", weight: 2 },
      { text: "상대가 먼저 제안하는 게 좋다", value: "I", weight: 2 },
      { text: "상황에 따라 다르다", value: "S", weight: 1 },
      { text: "항상 즉각적으로 결정한다", value: "D", weight: 1 },
    ],
  },
  {
    category: "환경 파악",
    flow: "데이트 동선/거리 선호",
    question: "애인과 데이트 장소를 정한다면?",
    options: [
      { text: "30분 이내", value: "H", weight: 2 },
      { text: "1시간 정도", value: "H", weight: 1 },
      { text: "핫스팟이면 거리 상관 없음", value: "O", weight: 2 },
      { text: "상대에게 맞춤", value: "O", weight: 1 },
    ],
  },
  {
    category: "환경 파악",
    flow: "데이트 동선/거리 선호",
    question: "애인과의 거리",
    options: [
      { text: "집 앞", value: "H", weight: 2 },
      { text: "1시간 이내", value: "H", weight: 1 },
      { text: "장거리(2시간 이상)", value: "O", weight: 2 },
    ],
  },
  {
    category: "환경 파악",
    flow: "동네 기반 장소 추천",
    question: "데이트를 하게 된다면?",
    options: [
      { text: "집 근처", value: "H", weight: 2 },
      { text: "회사 근처", value: "O", weight: 2 },
    ],
  },
  {
    category: "고민·관심사 파악",
    flow: "연애에서 가장 중요한 요소",
    question: "연애에서 가장 중요한 요소는?",
    options: [
      { text: "외모", value: "A", weight: 1 },
      { text: "성격", value: "M", weight: 2 },
      { text: "취미", value: "S", weight: 1 },
      { text: "가치관(종교)", value: "E", weight: 2 },
    ],
  },
  {
    category: "고민·관심사 파악",
    flow: "연인과 꼭 나누는 대화 주제",
    question: "연인과 꼭 나누는 대화 주제는?",
    options: [
      { text: "진로/취업/스펙", value: "M", weight: 2 },
      { text: "부동산/주식/재테크", value: "S", weight: 1 },
      { text: "사적인 고민", value: "I", weight: 2 },
      { text: "부모님/결혼/가족", value: "A", weight: 2 },
      { text: "회사/알바 이야기", value: "E", weight: 1 },
    ],
  },
  {
    category: "결격 사유 파악",
    flow: "결격 사유",
    question: "애인에게 “이건 안 된다/정 떨어진다”는 포인트는?",
    options: [
      { text: "문신/담배", value: "D", weight: 1 },
      { text: "과한 악세사리·피어싱", value: "I", weight: 1 },
      { text: "심한/병적 집착", value: "S", weight: 2 },
      { text: "과한 음주", value: "E", weight: 1 },
    ],
  },
  {
    category: "추가 환경·성향 파악",
    flow: "밸런스 게임",
    question: "애인과 만나는 횟수는?",
    options: [
      { text: "매일 가능", value: "M", weight: 2 },
      { text: "주 1–2회", value: "S", weight: 2 },
    ],
  },
];