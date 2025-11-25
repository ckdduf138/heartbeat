import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import Loader from '@/components/common/Loader';

import { questions } from '@/data/questions';
import { calculateLtiResult } from '@/data/ltiData';

export const IdealTypeTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (value: string, weight: number) => {
    const newAnswers = { ...answers, [value]: (answers[value] || 0) + weight };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsLoading(true);
      const resultData = calculateLtiResult({
        H_O: newAnswers["H"] >= newAnswers["O"] ? "H" : "O",
        M_S: newAnswers["M"] >= newAnswers["S"] ? "M" : "S",
        D_I: newAnswers["D"] >= newAnswers["I"] ? "D" : "I",
        A_E: newAnswers["A"] >= newAnswers["E"] ? "A" : "E",
      });
      setTimeout(() => {
        navigate(`/idealTypeResult?result=${resultData?.code || ''}`);
      }, 2000);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <Loader />
        </div>
      )}
      
      <Header
        title="LTI 테스트"
        leftIcon={currentQuestion > 0 ? <ChevronLeft size={24} /> : undefined}
        onLeftClick={currentQuestion > 0 ? goBack : undefined}
      />
      <div className="pt-14 pb-20 px-4">
        <div className="max-w-md mx-auto pt-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                {currentQuestion + 1} / {questions.length}
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

          <div className="card mb-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4 mb-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value, option.weight)}
                  className="w-full p-6 bg-gray-50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-200 hover:shadow-lg active:scale-98 border-2 border-transparent hover:border-primary/20 group"
                >
                  <div className="flex items-center gap-4">
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
          <p className="text-center text-gray-400 text-sm">
            💡 편하게 선택해보세요. 정답은 없어요!
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
