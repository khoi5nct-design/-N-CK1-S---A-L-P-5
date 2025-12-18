
import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS } from './questions';
import { AppState, UserAnswer, QuestionType, Option } from './types';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Review from './components/Review';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    userName: '',
    isLoggedIn: false,
    currentStep: 'login',
    userAnswers: [],
    score: 0
  });

  const [shuffledQuestions, setShuffledQuestions] = useState([...QUESTIONS]);

  // Sound effects
  const playSound = (type: 'correct' | 'complete' | 'click') => {
    const urls = {
      correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
      complete: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
      click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'
    };
    const audio = new Audio(urls[type]);
    audio.play().catch(() => {}); // Browser policy might block autoplay
  };

  const handleLogin = (name: string) => {
    playSound('click');
    setState(prev => ({ ...prev, userName: name, isLoggedIn: true, currentStep: 'quiz' }));
    shuffleAll();
  };

  const shuffleAll = useCallback(() => {
    const shuffleArray = <T,>(array: T[]): T[] => {
      const newArr = [...array];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    };

    const newQuestions = QUESTIONS.map(q => {
      // Logic for Multiple Choice: keep A, B, C, D labels but shuffle text
      if (q.type === QuestionType.MULTIPLE_CHOICE && q.options) {
        const originalOptions = q.options;
        const correctText = originalOptions.find(o => o.id === q.correctAnswer)?.text;
        const shuffledTexts = shuffleArray(originalOptions.map(o => o.text));
        
        const newOptions = originalOptions.map((o, idx) => ({
          id: o.id, // Always A, B, C, D
          text: shuffledTexts[idx]
        }));
        
        const newCorrectAnswer = newOptions.find(o => o.text === correctText)?.id;
        
        return { ...q, options: newOptions, correctAnswer: newCorrectAnswer };
      }

      // Logic for Multi Select: keep IDs but shuffle text content
      if (q.type === QuestionType.MULTI_SELECT && q.options) {
        const originalOptions = q.options;
        // Map correct IDs to their corresponding text
        const correctTexts = originalOptions
          .filter(o => q.correctIds?.includes(o.id))
          .map(o => o.text);
          
        const shuffledTexts = shuffleArray(originalOptions.map(o => o.text));
        
        const newOptions = originalOptions.map((o, idx) => ({
          id: o.id,
          text: shuffledTexts[idx]
        }));
        
        // Find the new IDs for the correct texts
        const newCorrectIds = newOptions
          .filter(o => correctTexts.includes(o.text))
          .map(o => o.id);

        return { ...q, options: newOptions, correctIds: newCorrectIds };
      }

      // Logic for Matching: shuffle both lists
      if (q.type === QuestionType.MATCHING && q.matchingOptions) {
        return {
          ...q,
          matchingOptions: {
            left: shuffleArray(q.matchingOptions.left),
            right: shuffleArray(q.matchingOptions.right)
          }
        };
      }
      
      return q;
    });

    // Also shuffle the order of the questions themselves
    setShuffledQuestions(shuffleArray(newQuestions));
  }, []);

  const handleCorrect = () => {
    playSound('correct');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleFinish = (answers: UserAnswer[]) => {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const finalScore = Math.round((correctCount / shuffledQuestions.length) * 10);
    
    setState(prev => ({
      ...prev,
      userAnswers: answers,
      score: finalScore,
      currentStep: 'result'
    }));

    if (finalScore === 10) {
      playSound('complete');
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  };

  const restart = () => {
    playSound('click');
    shuffleAll();
    setState(prev => ({
      ...prev,
      currentStep: 'quiz',
      userAnswers: [],
      score: 0
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-yellow-300">
        {state.currentStep === 'login' && <Login onLogin={handleLogin} />}
        {state.currentStep === 'quiz' && (
          <Quiz 
            questions={shuffledQuestions} 
            onFinish={handleFinish} 
            onCorrect={handleCorrect}
            userName={state.userName}
          />
        )}
        {state.currentStep === 'result' && (
          <Result 
            score={state.score} 
            userName={state.userName} 
            onRestart={restart}
            onReview={() => setState(prev => ({ ...prev, currentStep: 'review' }))}
          />
        )}
        {state.currentStep === 'review' && (
          <Review 
            questions={shuffledQuestions} 
            userAnswers={state.userAnswers} 
            onBack={() => setState(prev => ({ ...prev, currentStep: 'result' }))} 
          />
        )}
      </div>
      
      {/* Decorative footer */}
      <div className="mt-8 text-blue-500 font-bold flex items-center gap-2">
        <span>🚀 Học mà chơi, chơi mà học! 🌟</span>
      </div>
    </div>
  );
};

export default App;
