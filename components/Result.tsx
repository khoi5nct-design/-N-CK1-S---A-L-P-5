
import React from 'react';

interface ResultProps {
  score: number;
  userName: string;
  onRestart: () => void;
  onReview: () => void;
}

const Result: React.FC<ResultProps> = ({ score, userName, onRestart, onReview }) => {
  const getFeedback = () => {
    if (score === 10) return {
      title: "Oa! Xuất sắc quá đi!",
      message: `Bạn ${userName} ơi, bạn thật là một nhà thông thái nhí! 10 điểm tròn trĩnh luôn nè! 🏆🌟`,
      emoji: "🎉"
    };
    if (score >= 8) return {
      title: "Giỏi quá bạn ơi!",
      message: `Quá đỉnh luôn! Bạn đã nắm bài rất chắc rồi đó. Cố gắng một chút nữa là đạt điểm tuyệt đối nha! 💪✨`,
      emoji: "🌟"
    };
    if (score >= 5) return {
      title: "Khá lắm nha!",
      message: `Bạn đã vượt qua bài tập rồi nè. Hãy ôn luyện thêm một chút để đạt điểm cao hơn vào lần tới nhé! 📚🎈`,
      emoji: "👏"
    };
    return {
      title: "Đừng buồn nha!",
      message: `Không sao cả đâu, chúng mình chỉ đang học thôi mà. Xem lại bài rồi thử sức lại lần nữa, chắc chắn bạn sẽ tiến bộ! 🌈💖`,
      emoji: "🍀"
    };
  };

  const feedback = getFeedback();

  return (
    <div className="p-8 text-center animate-in zoom-in duration-500">
      <div className="text-7xl mb-4">{feedback.emoji}</div>
      <h2 className="text-3xl font-bold text-blue-600 mb-4">{feedback.title}</h2>
      
      <div className="inline-block bg-yellow-100 px-8 py-4 rounded-3xl border-4 border-yellow-400 mb-6">
        <span className="text-sm font-bold text-yellow-600 block uppercase tracking-widest">Điểm của bạn</span>
        <span className="text-6xl font-black text-yellow-700">{score}</span>
        <span className="text-2xl font-bold text-yellow-700">/10</span>
      </div>

      <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-md mx-auto italic">
        "{feedback.message}"
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={onReview}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
        >
          🔍 Xem lại bài làm
        </button>
        <button
          onClick={onRestart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
        >
          🔄 Luyện tập lại
        </button>
      </div>
    </div>
  );
};

export default Result;
