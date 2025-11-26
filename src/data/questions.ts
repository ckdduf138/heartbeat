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
    question: "연애를 할 때, 가장 먼저 떠오르는 '목표'는 무엇인가요?",
    options: [
      { text: "따뜻하고 편안한 안정감", value: "A", weight: 2 },
      { text: "설레고 자극적인 감정", value: "E", weight: 2 },
      { text: "함께 성장하는 동반자 느낌", value: "A", weight: 1 },
      { text: "새로운 경험과 즐거움", value: "E", weight: 1 }
    ]
  },
  {
    category: "관계 시작 방식",
    flow: "첫 만남 주도권",
    question: "호감 있는 사람과 첫 만남을 잡는다면?",
    options: [
      { text: "내가 먼저 제안하고 빠르게 결정!", value: "D", weight: 2 },
      { text: "상대가 먼저 제안해주는 게 편해", value: "I", weight: 2 },
      { text: "흐름에 맞춰 자연스럽게 정해지면 좋아", value: "S", weight: 1 },
      { text: "즉흥적이어도 바로 만날 수 있다", value: "D", weight: 1 }
    ]
  },
  {
    category: "연애 성향",
    flow: "연애 나이 선호",
    question: "연상, 연하, 동갑 중 어떤 타입이 더 편하신가요?",
    options: [
      { text: "연상", value: "A", weight: 2 },
      { text: "연하", value: "E", weight: 2 }, 
      { text: "동갑", value: "A", weight: 1 },
      { text: "상관없음", value: "E", weight: 1 }
    ]
  },
  {
    category: "연애 스타일",
    flow: "연락 빈도/방식",
    question: "이상적인 연락 스타일은 어떤가요?",
    options: [
      { text: "하루 종일 자연스럽게 이어지는 대화", value: "M", weight: 2 },
      { text: "필요할 때만 연락해도 편한 사이", value: "S", weight: 2 },
      { text: "상대가 먼저 연락해주면 좋겠다", value: "I", weight: 2 },
      { text: "답장은 바로바로 해야 마음이 놓인다", value: "D", weight: 1 }
    ]
  },
  {
    category: "환경 파악",
    flow: "데이트 동선/거리 선호",
    question: "데이트 장소를 정할 때 가장 중요한 기준은?",
    options: [
      { text: "편하게 가까운 곳이면 좋아", value: "H", weight: 2 },
      { text: "조금 멀어도 부담 없으면 돼", value: "H", weight: 1 },
      { text: "핫플이라면 거리 상관 없음!", value: "O", weight: 2 },
      { text: "상대가 가고 싶은 곳에 맞춘다", value: "O", weight: 1 }
    ]
  },
  {
    category: "환경 파악",
    flow: "연인과의 거리",
    question: "애인을 만날 때 선호하는 물리적 거리감은?",
    options: [
      { text: "집 앞처럼 정말 가까운 거리", value: "H", weight: 2 },
      { text: "1시간 이내면 괜찮다", value: "H", weight: 1 },
      { text: "멀어도 주말에 가면 돼 (장거리도 가능)", value: "O", weight: 2 }
    ]
  },
  {
    category: "환경 파악",
    flow: "동선 기반 만남",
    question: "만약 데이트 약속을 잡는다면, 어디가 더 편한가요?",
    options: [
      { text: "내가 있는 곳(집·학교·동네) 근처", value: "H", weight: 2 },
      { text: "상대와 중간 지점 또는 회사 근처", value: "O", weight: 2 }
    ]
  },
  {
    category: "고민·관심사 파악",
    flow: "연애에서 가장 중요한 요소",
    question: "연애에서 가장 크게 보는 기준은 무엇인가요?",
    options: [
      { text: "안정적인 외적 조건(외모·가정 등)", value: "A", weight: 1 },
      { text: "성격 궁합과 분위기", value: "M", weight: 2 },
      { text: "취미·라이프스타일의 조화", value: "S", weight: 1 },
      { text: "가치관·신념이 맞는지", value: "E", weight: 2 }
    ]
  },
  {
    category: "고민·관심사 파악",
    flow: "연인과의 대화 성향",
    question: "연인과 가장 자주 나누고 싶은 대화 주제는?",
    options: [
      { text: "미래 계획·진로 고민", value: "M", weight: 2 },
      { text: "재테크·현실적 이슈", value: "S", weight: 1 },
      { text: "마음속 고민·감정 이야기", value: "I", weight: 2 },
      { text: "가족·결혼·관계 가치관", value: "A", weight: 2 },
      { text: "일상 에피소드·재미있는 경험", value: "E", weight: 1 }
    ]
  },
  {
    category: "결격 사유 파악",
    flow: "비호감 포인트",
    question: "연애할 때 '정 떨어지는 포인트'는 무엇인가요?",
    options: [
      { text: "거친 스타일(문신·담배·하드코어 취향)", value: "D", weight: 1 },
      { text: "과한 꾸밈·피어싱·액세서리", value: "I", weight: 1 },
      { text: "집착·과한 감정 의존", value: "S", weight: 2 },
      { text: "과음·과한 놀거리 선호", value: "E", weight: 1 }
    ]
  },
  {
    category: "추가 환경·성향 파악",
    flow: "만남 주기",
    question: "이상적인 만남 주기는 어떤가요?",
    options: [
      { text: "매일이라도 좋다! 자주 보고 싶음", value: "M", weight: 2 },
      { text: "주 1~2회 정도가 딱 좋아", value: "S", weight: 2 }
    ]
  }
];
