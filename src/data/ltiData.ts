export const ltiData = {
  lti_system_name: "연애 특화 유형 (LTI: Love-Type Indicator)",
  lti_axes: [
    {
      code: "H_O",
      name_ko: "성향",
      description_ko: "H (내향형): 집순이/집돌이 | O (외향형): 활동가",
      pairs: [
        { value: "H", label_ko: "내향형 (집순이/집돌이)" },
        { value: "O", label_ko: "외향형 (활동가)" }
      ]
    },
    {
      code: "M_S",
      name_ko: "애착",
      description_ko: "M (밀착형): 잦은 연락, 높은 의존도 | S (독립형): 개인 공간/시간 중시",
      pairs: [
        { value: "M", label_ko: "밀착형 (잦은 연락, 높은 의존도)" },
        { value: "S", label_ko: "독립형 (개인 공간/시간 중시)" }
      ]
    },
    {
      code: "D_I",
      name_ko: "대응",
      description_ko: "D (직면형): 갈등 즉시 대화, 명확함 | I (회피형): 갈등 숙고/회피, 평화주의",
      pairs: [
        { value: "D", label_ko: "직면형 (갈등 즉시 대화, 명확함)" },
        { value: "I", label_ko: "회피형 (갈등 숙고/회피, 평화주의)" }
      ]
    },
    {
      code: "A_E",
      name_ko: "목표",
      description_ko: "A (안정 지향): 편안함, 동반자 추구 | E (자극 지향): 설렘, 짜릿한 경험 추구",
      pairs: [
        { value: "A", label_ko: "안정 지향 (편안함, 동반자 추구)" },
        { value: "E", label_ko: "자극 지향 (설렘, 짜릿한 경험 추구)" }
      ]
    }
  ],
  "lti_types": [
    {
      "code": "HMDA",
      "icon": "lion.png",
      "name_ko": "[내향/밀착] 솔직하게 안정감을 구축하는 리더",
      "description_ko": "밀착된 관계를 선호하며, 갈등은 즉시 대화로 해결해 불안 요소를 없애고 관계의 안정성을 빠르게 확보하려는 집순이/집돌이 리더입니다.",
      "traits": ["솔직함", "안정감", "리더십", "빠른 대처"],
      "H_O": "H",
      "M_S": "M",
      "D_I": "D",
      "A_E": "A"
    },
    {
      "code": "HMDE",
      "icon": "tiger.png",
      "name_ko": "[내향/밀착] 뜨겁게 부딪히며 설렘을 확인하는 직진형",
      "description_ko": "잦은 연락과 밀착을 통해 설렘을 유지하려 합니다. 갈등을 숨기지 않고 해결하며, 이 과정조차 연애의 자극이라 생각하는 열정적인 직진형입니다.",
      "traits": ["직진형", "설렘 유지", "밀착", "갈등 해결"],
      "H_O": "H",
      "M_S": "M",
      "D_I": "D",
      "A_E": "E"
    },
    {
      "code": "HMIA",
      "icon": "koala.png",
      "name_ko": "[내향/밀착] 평화를 사랑하는 조용한 집 동반자",
      "description_ko": "집에서 안정감을 느끼며, 갈등을 피하고 관계의 평화를 최우선으로 지킵니다. 밀착된 관계 속에서 편안함과 헌신을 추구합니다.",
      "traits": ["평화주의", "집순이", "헌신", "편안함"],
      "H_O": "H",
      "M_S": "M",
      "D_I": "I",
      "A_E": "A"
    },
    {
      "code": "HMIE",
      "icon": "cat.png",
      "name_ko": "[내향/밀착] 조용히 설렘을 갈망하는 밀착형",
      "description_ko": "갈등은 피하고 감정을 숙고하는 타입이지만, 잦은 연락으로 설렘이 식지 않도록 끊임없이 확인하며 관계에 에너지를 불어넣습니다.",
      "traits": ["조용함", "설렘", "감정 숙고", "밀착"],
      "H_O": "H",
      "M_S": "M",
      "D_I": "I",
      "A_E": "E"
    },
    {
      "code": "HSDA",
      "icon": "owl.png",
      "name_ko": "[내향/독립] 선을 지키며 관계를 명확히 하는 이성적 동반자",
      "description_ko": "각자의 시간을 존중하며, 문제가 생기면 솔직하고 이성적인 대화로 해결하려 합니다. 독립적인 관계 속에서 안정감을 구축합니다.",
      "traits": ["이성적", "독립적", "솔직함", "명확함"],
      "H_O": "H",
      "M_S": "S",
      "D_I": "D",
      "A_E": "A"
    },
    {
      "code": "HSDE",
      "icon": "leopard.png",
      "name_ko": "[내향/독립] 쿨하게 자극을 확인하는 도전자",
      "description_ko": "개인 공간을 중시하며, 만남의 횟수가 적더라도 강력한 설렘을 원합니다. 갈등은 끌지 않고 바로 처리하는 깔끔함을 선호합니다.",
      "traits": ["쿨함", "자극 추구", "깔끔함", "개인 공간"],
      "H_O": "H",
      "M_S": "S",
      "D_I": "D",
      "A_E": "E"
    },
    {
      "code": "HSIA",
      "icon": "rabbit.png",
      "name_ko": "[내향/독립] 혼자만의 시간을 즐기는 조용한 애착형",
      "description_ko": "평소엔 개인 시간을 중시하며 다툼을 회피하지만, 관계의 목표는 편안함과 안정적인 동반자입니다. 여유로운 관계를 선호합니다.",
      "traits": ["조용함", "애착형", "여유", "개인 시간"],
      "H_O": "H",
      "M_S": "S",
      "D_I": "I",
      "A_E": "A"
    },
    {
      "code": "HSIE",
      "icon": "unicorn.png",
      "name_ko": "[내향/독립] 여백 속에서 설렘을 기대하는 로맨티스트",
      "description_ko": "자유로운 연애를 하지만, 만날 때마다 새로운 설렘을 원합니다. 갈등은 숙고 후 정리하며, 관계에 활력을 주는 이벤트를 즐깁니다.",
      "traits": ["로맨티스트", "설렘", "여백", "이벤트"],
      "H_O": "H",
      "M_S": "S",
      "D_I": "I",
      "A_E": "E"
    },
    {
      "code": "OMDA",
      "icon": "dog.png",
      "name_ko": "[외향/밀착] 활동적인 일상 속에서 안정감을 찾는 동행자",
      "description_ko": "잦은 만남과 활동적인 데이트를 좋아합니다. 갈등이 생기면 미루지 않고 해결해, 편안하고 든든한 동반자 관계를 유지하려 합니다.",
      "traits": ["활동적", "안정감", "동행자", "빠른 해결"],
      "H_O": "O",
      "M_S": "M",
      "D_I": "D",
      "A_E": "A"
    },
    {
      "code": "OMDE",
      "icon": "monkey.png",
      "name_ko": "[외향/밀착] 현장에서 활력을 찾는 열정적인 탐험가",
      "description_ko": "활동을 통해 매번 새로운 자극을 얻으며, 갈등조차 연애의 흥미로운 요소로 받아들입니다. 뜨겁고 드라마틱한 연애를 지향합니다.",
      "traits": ["열정적", "탐험가", "자극 추구", "드라마틱"],
      "H_O": "O",
      "M_S": "M",
      "D_I": "D",
      "A_E": "E"
    },
    {
      "code": "OMIA",
      "icon": "sheep.png",
      "name_ko": "[외향/밀착] 평화로운 활동을 선호하는 배려형 동반자",
      "description_ko": "밖에서 함께하는 시간을 선호하지만, 다툼을 싫어합니다. 안정적인 관계를 위해 연인의 감정을 배려하며 조용히 맞춰줍니다.",
      "traits": ["평화주의", "배려형", "활동적", "조용함"],
      "H_O": "O",
      "M_S": "M",
      "D_I": "I",
      "A_E": "A"
    },
    {
      "code": "OMIE",
      "icon": "dolphin.png",
      "name_ko": "[외향/밀착] 함께 새로운 자극을 찾는 로맨틱 팔로워",
      "description_ko": "연인과의 활동을 통해 설렘을 유지하며, 관계에 문제가 생기면 시간을 두고 신중하게 해결 방법을 모색하는 타입입니다.",
      "traits": ["로맨틱", "자극 추구", "신중함", "활동적"],
      "H_O": "O",
      "M_S": "M",
      "D_I": "I",
      "A_E": "E"
    },
    {
      "code": "OSDA",
      "icon": "goat.png",
      "name_ko": "[외향/독립] 자유와 안정감을 모두 원하는 현실주의자",
      "description_ko": "독립적인 활동을 존중하지만, 만날 때는 솔직하게 소통하여 관계의 안정성을 구축합니다. 쿨한 동반자 관계를 선호합니다.",
      "traits": ["현실주의", "자유", "안정감", "쿨함"],
      "H_O": "O",
      "M_S": "S",
      "D_I": "D",
      "A_E": "A"
    },
    {
      "code": "OSDE",
      "icon": "eagle.png",
      "name_ko": "[외향/독립] 개인 활동과 강렬한 설렘을 추구하는 모험가",
      "description_ko": "각자의 삶에 집중하며, 연애에서는 짜릿함과 긴장감을 얻길 원합니다. 갈등은 숨기지 않고 논리적으로 해결합니다.",
      "traits": ["모험가", "강렬함", "논리적", "개인 활동"],
      "H_O": "O",
      "M_S": "S",
      "D_I": "D",
      "A_E": "E"
    },
    {
      "code": "OSIA",
      "icon": "turtle.png",
      "name_ko": "[외향/독립] 여유와 평화를 중시하는 신중한 연인",
      "description_ko": "다툼을 회피하고 숙고하는 타입으로, 개인 시간을 충분히 활용하며 안정적인 관계를 조용히 지속하려 합니다.",
      "traits": ["신중함", "여유", "평화주의", "개인 시간"],
      "H_O": "O",
      "M_S": "S",
      "D_I": "I",
      "A_E": "A"
    },
    {
      "code": "OSIE",
      "icon": "butterfly.png",
      "name_ko": "[외향/독립] 자유로운 영혼의 예측 불가능한 연인",
      "description_ko": "구속을 싫어하며, 연애의 목적은 끊임없는 설렘과 새로운 자극입니다. 갈등은 최대한 피하고 흥미로운 경험에 집중합니다.",
      "traits": ["자유로운 영혼", "예측 불가", "설렘", "경험 중시"],
      "H_O": "O",
      "M_S": "S",
      "D_I": "I",
      "A_E": "E"
    }
  ]
};

export const calculateLtiResult = (answers: Record<string, string>) => {
  const { lti_types } = ltiData;

  // 각 축의 답변과 일치하는 유형을 찾음
  const result = lti_types.find((type) => {
    return (
      type.H_O === answers.H_O &&
      type.M_S === answers.M_S &&
      type.D_I === answers.D_I &&
      type.A_E === answers.A_E
    );
  });

  return result || null; // 결과가 없으면 null 반환
};