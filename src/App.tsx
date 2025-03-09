/* 
 *  responsible for managing core logic
 *  => displaying poll
 *  => generating story prompt
 *  => tracking user points
 */

/* e.g: 
import { useState, useEffect } from 'react';
import Poll from './components/Poll';
import StoryPrompt from './components/StoryPrompt';
import PointsSystem from './components/PointsSystem';

export default function App() {
  const [winningGenre, setWinningGenre] = useState<string | null>(null);

  return (
    <vstack height="100%" width="100%" alignment="center middle" gap="medium">
      <Poll onGenreSelected={setWinningGenre} />
      {winningGenre && <StoryPrompt genre={winningGenre} />}
      <PointsSystem />
    </vstack>
  );
} */