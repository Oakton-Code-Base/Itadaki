/*
 * responsible for generating story prompt
 * => connect gpt api
 * => get the top genre poll result when prompting
 * 
 */
 
import type {Context} from '@devvit/public-api';
import { Devvit} from '@devvit/public-api';






/*
import { useEffect, useState } from 'react';

export default function StoryPrompt({ genre }) {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    async function fetchPrompt() {
      const response = await fetch('/api/generatePrompt', {
        method: 'POST',
        body: JSON.stringify({ genre }),
      });
      const data = await response.json();
      setPrompt(data.prompt);
    }
    fetchPrompt();
  }, [genre]);

  return (
    <vstack>
      <text size="large">Story Prompt for {genre}:</text>
      <text>{prompt || 'Generating...'}</text>
    </vstack>
  );
}
*/