
import React from 'react';
import { Question, UserAnswer, QuestionType } from '../types';

interface ReviewProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  onBack: () => void;
}

const Review: React.FC<ReviewProps> = ({ questions, userAnswers, onBack }) => {
  return (
    <div className="p-6 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 z-10 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Xem lại bài làm 🧐</h2>
        <button 
          onClick={onBack}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-bold"
        >
          Quay lại
        </button>
      </div>

      <div className="space-y-8">
        {questions.map((q, idx) => {
          const userAnswer = userAnswers.find(ua => ua.questionId === q.id);
          return (
            <div key={q.id} className={`p-4 rounded-2xl border-2 ${userAnswer?.isCorrect ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'}`}>
              <div className="flex items-start gap-3 mb-2">
                <span className={`w-6 h-6 shrink-0 text-center leading-6 rounded-full text-white text-xs font-bold ${userAnswer?.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                  {userAnswer?.isCorrect ? '✓' : '✗'}
                </span>
                <h3 className="font-bold text-gray-800">Câu {idx + 1}: {q.content}</h3>
              </div>
              
              <div className="ml-9 space-y-1 text-sm">
                <div className="text-gray-600">
                  <span className="font-semibold">Đáp án của bạn:</span>{' '}
                  <span className={userAnswer?.isCorrect ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                    {formatAnswer(q, userAnswer?.answer)}
                  </span>
                </div>
                {!userAnswer?.isCorrect && (
                  <div className="text-blue-600">
                    <span className="font-semibold">Đáp án đúng là:</span>{' '}
                    <span className="font-bold">{formatCorrect(q)}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <button 
        onClick={onBack}
        className="w-full mt-8 bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg"
      >
        Quay lại bảng điểm
      </button>
    </div>
  );
};

const formatAnswer = (q: Question, val: any): string => {
  if (!val) return "Chưa trả lời";
  if (q.type === QuestionType.MULTIPLE_CHOICE) return val;
  if (q.type === QuestionType.TRUE_FALSE_SEQUENCE) return val.join(' - ');
  if (q.type === QuestionType.MULTI_SELECT) return val.join(', ');
  if (q.type === QuestionType.MATCHING) return "Đã hoàn thành nối";
  return String(val);
};

const formatCorrect = (q: Question): string => {
  if (q.type === QuestionType.MULTIPLE_CHOICE) return q.correctAnswer || "";
  if (q.type === QuestionType.TRUE_FALSE_SEQUENCE) return q.correctSequence?.join(' - ') || "";
  if (q.type === QuestionType.MULTI_SELECT) return q.correctIds?.join(', ') || "";
  if (q.type === QuestionType.MATCHING) return "Xem quy tắc nối trong đề";
  return "";
};

export default Review;
