
import React, { useState, useEffect } from 'react';
import { Question, QuestionType, Option } from '../types';

interface QuestionItemProps {
  question: Question;
  onAnswer: (answer: any, isCorrect: boolean) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [tfValues, setTfValues] = useState<string[]>([]);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [matchingSelections, setMatchingSelections] = useState<{left: string | null, right: string | null}>({left: null, right: null});
  const [userPairs, setUserPairs] = useState<Record<string, string>>({});

  useEffect(() => {
    if (question.type === QuestionType.TRUE_FALSE_SEQUENCE) {
      setTfValues(new Array(question.options?.length || 0).fill(''));
    }
  }, [question]);

  const handleMCSelect = (id: string) => {
    setSelected(id);
    onAnswer(id, id === question.correctAnswer);
  };

  const handleTFChange = (index: number, val: string) => {
    const newValues = [...tfValues];
    newValues[index] = val;
    setTfValues(newValues);

    // If all filled, auto-submit
    if (newValues.every(v => v !== '')) {
      const isCorrect = JSON.stringify(newValues) === JSON.stringify(question.correctSequence);
      onAnswer(newValues, isCorrect);
    }
  };

  const handleMultiSubmit = () => {
    const isCorrect = 
      multiSelected.length === question.correctIds?.length && 
      multiSelected.every(id => question.correctIds?.includes(id));
    onAnswer(multiSelected, isCorrect);
  };

  const handleMatchingClick = (side: 'left' | 'right', id: string) => {
    const newSelection = { ...matchingSelections, [side]: id };
    
    if (newSelection.left && newSelection.right) {
      const newPairs = { ...userPairs, [newSelection.left]: newSelection.right };
      setUserPairs(newPairs);
      setMatchingSelections({ left: null, right: null });

      if (Object.keys(newPairs).length === (question.matchingOptions?.left.length || 0)) {
        const isCorrect = Object.entries(question.correctPairs || {}).every(([l, r]) => newPairs[l] === r);
        onAnswer(newPairs, isCorrect);
      }
    } else {
      setMatchingSelections(newSelection);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-100">
        <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2 uppercase">
          {question.topic}
        </span>
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          {question.content}
        </h2>
      </div>

      {/* Multiple Choice */}
      {question.type === QuestionType.MULTIPLE_CHOICE && (
        <div className="grid grid-cols-1 gap-3">
          {question.options?.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleMCSelect(opt.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all font-medium ${
                selected === opt.id 
                  ? 'bg-blue-100 border-blue-500 shadow-inner' 
                  : 'bg-white border-gray-100 hover:border-blue-200 hover:bg-blue-50 shadow-sm'
              }`}
            >
              <span className="inline-block w-8 h-8 text-center leading-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">
                {opt.id}
              </span>
              {opt.text}
            </button>
          ))}
        </div>
      )}

      {/* True/False Sequence */}
      {question.type === QuestionType.TRUE_FALSE_SEQUENCE && (
        <div className="space-y-4">
          {question.options?.map((opt, idx) => (
            <div key={opt.id} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-white rounded-xl border-2 border-gray-100 shadow-sm gap-2">
              <span className="text-gray-700 flex-1">{opt.text}</span>
              <div className="flex gap-2 shrink-0">
                {['Đ', 'S'].map(val => (
                  <button
                    key={val}
                    onClick={() => handleTFChange(idx, val)}
                    className={`w-12 h-10 rounded-lg font-bold transition-all ${
                      tfValues[idx] === val 
                        ? (val === 'Đ' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Matching */}
      {question.type === QuestionType.MATCHING && (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            {question.matchingOptions?.left.map(opt => (
              <button
                key={opt.id}
                disabled={!!userPairs[opt.id]}
                onClick={() => handleMatchingClick('left', opt.id)}
                className={`w-full p-3 rounded-lg text-sm text-center font-bold border-2 transition-all ${
                  userPairs[opt.id] ? 'bg-gray-100 border-gray-200 text-gray-400' :
                  matchingSelections.left === opt.id ? 'bg-yellow-100 border-yellow-500 scale-105' : 'bg-white border-blue-100 hover:border-blue-300'
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {question.matchingOptions?.right.map(opt => {
              const matchedLeftId = Object.keys(userPairs).find(l => userPairs[l] === opt.id);
              return (
                <button
                  key={opt.id}
                  disabled={!!matchedLeftId}
                  onClick={() => handleMatchingClick('right', opt.id)}
                  className={`w-full p-3 rounded-lg text-sm text-center font-bold border-2 transition-all ${
                    matchedLeftId ? 'bg-gray-100 border-gray-200 text-gray-400' :
                    matchingSelections.right === opt.id ? 'bg-yellow-100 border-yellow-500 scale-105' : 'bg-white border-blue-100 hover:border-blue-300'
                  }`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Multi Select */}
      {question.type === QuestionType.MULTI_SELECT && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {question.options?.map(opt => (
              <label key={opt.id} className="flex items-center p-4 bg-white border-2 border-gray-100 rounded-xl cursor-pointer hover:bg-blue-50 transition-all">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded border-gray-300 text-blue-500 focus:ring-blue-500 mr-4"
                  checked={multiSelected.includes(opt.id)}
                  onChange={(e) => {
                    if (e.target.checked) setMultiSelected([...multiSelected, opt.id]);
                    else setMultiSelected(multiSelected.filter(id => id !== opt.id));
                  }}
                />
                <span className="font-medium text-gray-800">{opt.text}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleMultiSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
          >
            Nộp bài câu này! ✨
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
