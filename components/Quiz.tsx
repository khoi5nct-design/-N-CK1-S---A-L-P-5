
import React, { useState, useEffect } from 'react';
import { Question, UserAnswer, QuestionType } from '../types';
import QuestionItem from './QuestionItem';

interface QuizProps {
  questions: Question[];
  userName: string;
  onFinish: (answers: UserAnswer[]) => void;
  onCorrect: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, userName, onFinish, onCorrect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: any, isCorrect: boolean) => {
    if (isCorrect) onCorrect();
    
    const newAnswers = [
      ...userAnswers,
      { questionId: currentQuestion.id, answer, isCorrect }
    ];
    setUserAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 600);
    } else {
      setTimeout(() => onFinish(newAnswers), 800);
    }
  };

  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-blue-600 font-bold">
          Chào {userName}! 👋
        </div>
        <div className="text-gray-500 font-medium">
          Câu {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-green-400 h-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={currentQuestion.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
        <QuestionItem 
          question={currentQuestion} 
          onAnswer={handleAnswer} 
        />
      </div>
    </div>
  );
};

export default Quiz;
