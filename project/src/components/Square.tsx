import React from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-24 h-24 border-2 border-gray-600 rounded-lg flex items-center justify-center bg-black hover:bg-gray-900 transition-colors duration-200"
      onClick={onSquareClick}
    >
      {value === 'X' && (
        <X className="w-16 h-16 text-red-500 animate-appear filter drop-shadow-glow-red" />
      )}
      {value === 'O' && (
        <Circle className="w-16 h-16 text-green-500 animate-appear filter drop-shadow-glow-green" />
      )}
    </button>
  );
};

export default Square;