import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/common/Button';
import { idealTypeQuestions, idealTypeResults } from '@/data/idealTypes';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export const IdealTypeTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < idealTypeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // MBTI 각 차원별로 집계
    const counts: Record<string, number> = {};
    finalAnswers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    // 각 차원에서 더 많이 선택된 타입 선택
    const mbti =
      (counts['E'] >= counts['I'] ? 'E' : 'I') +
      (counts['S'] >= counts['N'] ? 'S' : 'N') +
      (counts['T'] >= counts['F'] ? 'T' : 'F') +
      (counts['J'] >= counts['P'] ? 'J' : 'P');

    setResult(mbti);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    // 결과 코드가 없을 경우 안전하게 fallback
    const resultData = idealTypeResults[result as keyof typeof idealTypeResults] || idealTypeResults['AAAA'];
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="테스트 결과" />
        <div className="pt-14 pb-20 px-4">
          <div className="max-w-md mx-auto pt-6 animate-slide-up">
            {/* 결과 카드 */}
            <div className="card mb-6 bg-gradient-to-br from-primary to-primary-dark text-white border-0">
              <div className="text-center py-8">
                <div className="text-7xl mb-4">{resultData.title.match(/([\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF])/g)?.[0] ?? '💖'}</div>
                <div className="text-3xl font-bold mb-2">{result}</div>
                <h2 className="text-2xl font-bold mb-4">{resultData.title.replace(/^[^\w가-힣]+\s*/, '')}</h2>
                <p className="text-white/90 text-base leading-relaxed">
                  {resultData.description}
                </p>
              </div>
            </div>

            {/* 특징 */}
            <div className="card mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                당신이 원하는 이상형의 특징
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {resultData.traits.map((trait, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-gray-50 rounded-xl text-center font-medium text-gray-700"
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* 버튼들 */}
            <div className="space-y-3">
              <Button
                variant="primary"
                fullWidth
                onClick={() => navigate('/match ')}
              >
                이상형 찾으러 가기
              </Button>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  const question = idealTypeQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / idealTypeQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="이상형 테스트"
        leftIcon={currentQuestion > 0 ? <ChevronLeft size={24} /> : undefined}
        onLeftClick={currentQuestion > 0 ? goBack : undefined}
      />
      <div className="pt-14 pb-20 px-4">
        <div className="max-w-md mx-auto pt-6">
          {/* 진행바 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                {currentQuestion + 1} / {idealTypeQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full gradient-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>


          {/* 질문 */}
          <div className="card mb-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              {question.question}
            </h2>

            {/* 옵션들 */}
            <div className="space-y-4 mb-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full p-6 bg-gray-50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-200 hover:shadow-lg active:scale-98 border-2 border-transparent hover:border-primary/20 group"
                >
                  <div className="flex items-center gap-4">
                    {/* <div className="text-4xl">{option.image}</div> */}
                    <p className="flex-1 text-left text-lg font-medium text-gray-700 group-hover:text-gray-900">
                      {option.text}
                    </p>
                    <ChevronRight
                      size={20}
                      className="text-gray-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </button>
              ))}
            </div>
            {currentQuestion > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="w-full py-3 mt-2 rounded-full bg-primary/10 text-primary-dark font-bold text-base transition hover:bg-primary/20"
              >
                ← 이전
              </button>
            )}
          </div>

          {/* 힌트 */}
          <p className="text-center text-gray-400 text-sm">
            💡 편하게 선택해보세요. 정답은 없어요!
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
