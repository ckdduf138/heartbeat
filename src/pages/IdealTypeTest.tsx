import { ChevronLeft } from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import Loader from '@/components/common/Loader';
import { QuestionImage, AnswerOption } from '@/components/features/TestQuestion';
import { ProgressBar } from '@/components/features/ProgressBar';

import { questions } from '@/data/questions';
import { useTestNavigation } from '@/hooks/useTestNavigation';

export const IdealTypeTest: React.FC = () => {
  const {
    currentQuestion,
    isLoading,
    animationClass,
    selectedOption,
    progress,
    handleAnswer,
    goBack,
  } = useTestNavigation();

  const question = questions[currentQuestion];

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
          <ProgressBar 
            current={currentQuestion + 1} 
            total={questions.length} 
            progress={progress} 
          />

          <div className={`card mb-6 ${animationClass}`}>
            <QuestionImage
              image={question.image}
              objectFit={question.objectFit}
              aspectRatio={question.aspectRatio}
              category={question.category}
            />
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              {question.question}
            </h2>
            
            <div className="space-y-4 mb-4">
              {question.options.map((option, index) => (
                <AnswerOption
                  key={index}
                  text={option.text}
                  isSelected={selectedOption === index + 1}
                  onClick={() => handleAnswer(index + 1)}
                />
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
