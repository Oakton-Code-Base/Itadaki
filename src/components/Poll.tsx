/*
 * handles the voting system
 * => picks 7 randoms genres from a list of 100
 * => lets users vote
 * 
 */

/* ex: 
import genres from '../utils/genreList';

export default function Poll({ onGenreSelected }) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [genreOptions, setGenreOptions] = useState<string[]>([]);

  useEffect(() => {
    setGenreOptions(shuffleArray(genres).slice(0, 7)); // Pick 7 random genres
  }, []);

  return (
    <vstack>
      <text size="large">Vote for a genre:</text>
      {genreOptions.map((genre) => (
        <button key={genre} onPress={() => setSelectedGenre(genre)}>
          {genre}
        </button>
      ))}
      {selectedGenre && <button onPress={() => onGenreSelected(selectedGenre)}>Confirm</button>}
    </vstack>
  );
}
  */