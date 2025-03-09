/*
 * responsible for the points system
 * => tracks user points
 * 
 */

/*
import { useEffect, useState } from 'react';

export default function PointsSystem() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    async function fetchPoints() {
      const response = await fetch('/api/userPoints');
      const data = await response.json();
      setPoints(data.points);
    }
    fetchPoints();
  }, []);

  return <text size="large">Your Points: {points}</text>;
}
*/