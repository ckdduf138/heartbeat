import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '@/data/questions';
import { calculateLtiResult } from '@/data/ltiData';
import { useLocalAnswers } from '@/hooks/useLocalAnswers';

export const useTestNavigation = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const answersRef = useRef<number[]>(Array(questions.length).fill(0));
  const [isLoading, setIsLoading] = useState(false);
  const { saveLtiInfo } = useLocalAnswers();
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const move_time = 200;

  const moveToNext = () => {
    setIsAnimating(true);
    setAnimationClass('slide-out-left');

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      // 다음 문제의 이전 답변 복원
      setSelectedOption(answersRef.current[nextQuestion] || null);
      setAnimationClass('slide-in-right');
      setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, move_time);
    }, move_time);
  };

  const moveToPrevious = () => {
    if (currentQuestion > 0 && !isAnimating) {
      setIsAnimating(true);
      setAnimationClass('slide-out-right');

      setTimeout(() => {
        const prevQuestion = currentQuestion - 1;
        setCurrentQuestion(prevQuestion);
        // 이전 문제의 답변 복원
        setSelectedOption(answersRef.current[prevQuestion] || null);
        setAnimationClass('slide-in-left');
        setTimeout(() => {
          setAnimationClass('');
          setIsAnimating(false);
        }, move_time);
      }, move_time);
    }
  };

  const submitTest = (optionIndex: number) => {
    if (answersRef.current.length !== questions.length) {
      answersRef.current = Array.from({ length: questions.length }, (_, i) => answersRef.current[i] ?? 0);
    }
    answersRef.current[currentQuestion] = optionIndex;

    setIsLoading(true);
    
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

    saveLtiInfo({ ltiType: resultData?.code || '', answers: answersRef.current });

    setTimeout(() => {
      navigate(`/idealTypeResult?result=${resultData?.code || ''}`);
    }, 2000);
  };

  const handleAnswer = (optionIndex: number) => {
    if (isAnimating) return;

    if (selectedOption === optionIndex) {
      if (answersRef.current.length !== questions.length) {
        answersRef.current = Array.from({ length: questions.length }, (_, i) => answersRef.current[i] ?? 0);
      }
      answersRef.current[currentQuestion] = optionIndex;

      if (currentQuestion < questions.length - 1) {
        moveToNext();
      } else {
        submitTest(optionIndex);
      }
    } else {
      setSelectedOption(optionIndex);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return {
    currentQuestion,
    isLoading,
    animationClass,
    selectedOption,
    progress,
    handleAnswer,
    goBack: moveToPrevious,
  };
};
