
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="p-8 flex flex-col items-center text-center">
      <div className="text-6xl mb-6">📚</div>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Sử Địa Nhí</h1>
      <p className="text-gray-600 mb-8">Chào mừng bạn nhỏ đến với sân chơi trí tuệ!</p>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="block text-left text-sm font-semibold text-gray-700 mb-1 ml-1">
            Nhập tên của bạn:
          </label>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-lg"
            placeholder="Ví dụ: Bảo Nam..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg"
        >
          Bắt đầu luyện tập ngay! 🚀
        </button>
      </form>
    </div>
  );
};

export default Login;
