import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { MovieCharacters } from '@/models/character.model';
import { AnimeService } from '@/services/anime.service';

import { useMoviesContext } from './MoviesContext';

interface SelectedCharacter {
  characterId: number;
  characterName: string;
}

interface AppProviderProps {
  children: ReactNode;
}

const MovieCharactersContext = createContext(
  {} as {
    charactersList: MovieCharacters[];
    selectedCharacter: SelectedCharacter;
    loading: boolean;
    error: string | null;
    getMovieCharacters: () => void;
    setSelectedCharacter: Dispatch<SetStateAction<SelectedCharacter>>;
  },
);

const MovieCharactersProvider: FC<AppProviderProps> = ({ children }) => {
  const [charactersList, setCharactersList] = useState<MovieCharacters[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter>({
    characterId: 0,
    characterName: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { selectedMovie } = useMoviesContext();

  const getMovieCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      setCharactersList([]);
      const result = await AnimeService.characterByMovie(selectedMovie.movieId);
      console.log(result);
      setCharactersList(result.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedMovie.movieId) {
      getMovieCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMovie.movieId]);

  return (
    <MovieCharactersContext.Provider
      value={{
        error,
        getMovieCharacters,
        loading,
        charactersList,
        setSelectedCharacter,
        selectedCharacter,
      }}
    >
      {children}
    </MovieCharactersContext.Provider>
  );
};

const useMovieCharactersContext = () => {
  const context = useContext(MovieCharactersContext);

  if (!context) {
    throw new Error('useMovieCharactersContext must be used within a MovieCharactersProvider');
  }

  return context;
};

export { MovieCharactersProvider, useMovieCharactersContext };
