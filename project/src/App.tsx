import React, { useState } from 'react';
import Board from './components/Board';
import Button from './components/Button';
import { Gamepad2, RotateCcw } from 'lucide-react';

function App() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handleReplay() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="flex items-center gap-4 mb-8">
        <Gamepad2 className="w-8 h-8 text-purple-500" />
        <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <div className="flex flex-col items-center gap-6">
          <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
          <Button 
            variant="primary"
            onClick={handleReplay}
          >
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Replay Game
            </div>
          </Button>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Game History</h2>
          <ol className="space-y-2">
            {history.map((_, move) => (
              <li key={move}>
                <Button onClick={() => jumpTo(move)}>
                  {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                </Button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;