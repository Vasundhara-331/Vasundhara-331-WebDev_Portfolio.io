import React from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/gameLogic';

interface BoardProps {
  squares: (string | null)[];
  xIsNext: boolean;
  onPlay: (squares: (string | null)[]) => void;
}

const Board: React.FC<BoardProps> = ({ squares, xIsNext, onPlay }) => {
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-bold mb-4 text-white">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array(9).fill(null).map((_, i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;