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
    category: "선호 연령",
    flow: "연애 대상 선호",
    question: "연상, 연하, 동갑 중 어떤 타입이 더 편하신가요?",
    options: [
      { text: "연상", value: "A", weight: 2 },
      { text: "연하", value: "E", weight: 2 },
      { text: "동갑", value: "A", weight: 1 },
      { text: "상관없음", value: "E", weight: 1 }
    ]
  },
  {
    category: "관계 이미지",
    flow: "연애에서 떠오르는 이미지",
    question: "연애를 할 때, 먼저 떠오르는 이미지는 무엇인가요?",
    options: [
      { text: "편안함, 안정감", value: "A", weight: 2 },
      { text: "설레고 자극적인 감정", value: "E", weight: 2 },
      { text: "함께 성장하는 동반자", value: "M", weight: 2 }
    ]
  },
  {
    category: "첫 만남",
    flow: "첫 만남 주도권",
    question: "호감 있는 사람과 첫 만남을 잡는다면?",
    options: [
      { text: "내가 먼저!", value: "D", weight: 2 },
      { text: "상대가 먼저!", value: "I", weight: 2 }
    ]
  },
  {
    category: "데이트 성향",
    flow: "주말/활동",
    question: "주말 데이트는 보통 집에서 쉬나요, 밖에서 활동하나요?",
    options: [
      { text: "집에서 쉬는 편이에요", value: "H", weight: 2 },
      { text: "밖에서 활동하는 편이에요", value: "O", weight: 2 }
    ]
  },
  {
    category: "약속 장소",
    flow: "데이터 동선",
    question: "만약 데이트 약속을 잡는다면, 어디가 더 편한가요?",
    options: [
      { text: "내가 있는 곳(집·학교·동네) 근처", value: "H", weight: 2 },
      { text: "상대와 중간 지점 또는 회사 근처", value: "O", weight: 2 }
    ]
  },
  {
    category: "중요 기준",
    flow: "연애에서 가장 큰 기준",
    question: "연애에서 가장 크게 보는 기준은 무엇인가요?",
    options: [
      { text: "외적 조건(외모·가정 등)", value: "A", weight: 1 },
      { text: "성격 궁합", value: "M", weight: 2 },
      { text: "취미·라이프스타일", value: "S", weight: 1 },
      { text: "가치관·신념(종교)", value: "E", weight: 2 }
    ]
  },
  {
    category: "대화 주제",
    flow: "공유하고 싶은 대화",
    question: "연인과 가장 자주 나누고 싶은 대화 주제는?",
    options: [
      { text: "미래 계획·진로 고민", value: "M", weight: 2 },
      { text: "마음속 고민·감정 이야기", value: "I", weight: 2 },
      { text: "가족·결혼·관계 가치관", value: "A", weight: 2 },
      { text: "일상 에피소드·재미있는 경험", value: "E", weight: 1 }
    ]
  },
  {
    category: "비호감 포인트",
    flow: "정 떨어지는 포인트",
    question: "연애할 때 '정 떨어지는 포인트'는 무엇인가요?",
    options: [
      { text: "문신·담배·피어싱", value: "D", weight: 1 },
      { text: "감정 쓰레기통", value: "I", weight: 2 },
      { text: "잦은 술자리", value: "E", weight: 1 }
    ]
  },
  {
    category: "만남 주기",
    flow: "만남 빈도",
    question: "이상적인 만남 주기는 어떤가요?",
    options: [
      { text: "매일이라도 좋다!", value: "M", weight: 2 },
      { text: "주 1회 딱 좋아!", value: "S", weight: 2 }
    ]
  },
  {
    category: "취미 공유",
    flow: "취미/공유",
    question: "연인과 취미를 함께 즐기는 편인가요, 각자 유지하나요?",
    options: [
      { text: "함께 즐기는 편이에요", value: "M", weight: 2 },
      { text: "각자 취미를 존중해요", value: "S", weight: 2 }
    ]
  }
];
