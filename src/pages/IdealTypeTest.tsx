import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import Loader from '@/components/common/Loader';

import { questions } from '@/data/questions';
import { calculateLtiResult } from '@/data/ltiData';

import { useLocalAnswers } from '@/hooks/useLocalAnswers';
export const IdealTypeTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const answersRef = useRef<number[]>(Array(questions.length).fill(0));
  const [isLoading, setIsLoading] = useState(false);
  const [preloadUrls, setPreloadUrls] = useState<string[] | undefined>(undefined);
  const [pendingResultCode, setPendingResultCode] = useState<string>('');
  const { saveLtiInfo } = useLocalAnswers();

  const handleAnswer = (optionIndex: number) => {
    // ensure array length matches questions
    if (answersRef.current.length !== questions.length) {
      answersRef.current = Array.from({ length: questions.length }, (_, i) => answersRef.current[i] ?? 0);
    }
    answersRef.current[currentQuestion] = optionIndex;
    // answersRef is updated synchronously above, so UI can read it immediately

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsLoading(true);
      // 결과 계산은 latest answersRef 사용
      const selectedValues = answersRef.current.map((idx, qIdx) => {
        const opt = questions[qIdx].options[idx - 1];
        return opt ? opt.value : '';
      });
      const resultData = calculateLtiResult({
        H_O: selectedValues.filter(v => v === "H").length >= selectedValues.filter(v => v === "O").length ? "H" : "O",
        M_S: selectedValues.filter(v => v === "M").length >= selectedValues.filter(v => v === "S").length ? "M" : "S",
        D_I: selectedValues.filter(v => v === "D").length >= selectedValues.filter(v => v === "I").length ? "D" : "I",
        A_E: selectedValues.filter(v => v === "A").length >= selectedValues.filter(v => v === "E").length ? "A" : "E",
      });

      // 준비할 이미지(결과 아이콘)를 세팅해서 Loader로 전달
      const preloadUrls: string[] = [];
      if (resultData?.icon) {
        preloadUrls.push(`/assets/lti/${resultData.icon}`);
      }

      // 검사 결과를 로컬스토리지에 저장 (ltiType, answers만)
      saveLtiInfo({ ltiType: resultData?.code || '', answers: answersRef.current });

      // Loader가 읽어갈 수 있도록 상태에 저장
      setPreloadUrls(preloadUrls);
      setPendingResultCode(resultData?.code || '');
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
          <Loader
            urls={preloadUrls}
            onReady={() => {
              // navigate when Loader reports images ready
              setIsLoading(false);
              setPreloadUrls(undefined);
              navigate(`/idealTypeResult?result=${pendingResultCode}`);
            }}
            minDuration={600}
          />
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
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = answersRef.current[currentQuestion] === index + 1;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index + 1)}
                    className={`w-full p-6 rounded-2xl transition-all duration-200 hover:shadow-lg active:scale-98 group ${
                      isSelected
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <p className={`flex-1 text-left text-lg font-medium ${isSelected ? 'text-primary' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {option.text}
                      </p>
                      <ChevronRight
                        size={20}
                        className={`transition-colors ${isSelected ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}
                      />
                    </div>
                  </button>
                );
              })}
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
