import { useState } from 'react';
import { AnsoffGame } from './components/AnsoffGame';
import { PorterGame } from './components/PorterGame';
import { Home } from './components/Home';

export type GameMode = 'home' | 'ansoff' | 'porter';

export function App() {
  const [gameMode, setGameMode] = useState<GameMode>('home');
  const [ansoffScore, setAnsoffScore] = useState(0);
  const [porterScore, setPorterScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {gameMode === 'home' && (
        <Home 
          onSelectGame={setGameMode}
          ansoffScore={ansoffScore}
          porterScore={porterScore}
        />
      )}
      {gameMode === 'ansoff' && (
        <AnsoffGame 
          onBack={() => setGameMode('home')}
          onScoreUpdate={setAnsoffScore}
        />
      )}
      {gameMode === 'porter' && (
        <PorterGame 
          onBack={() => setGameMode('home')}
          onScoreUpdate={setPorterScore}
        />
      )}
    </div>
  );
}
