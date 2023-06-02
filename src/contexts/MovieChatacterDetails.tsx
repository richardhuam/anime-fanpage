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

import { useMovieCharactersContext } from '@/contexts/MovieCharactersContext';
import { AnimeCharacterDetails } from '@/models/character-details.model';
import { AnimeService } from '@/services/anime.service';

const MovieChatacterDetailsContext = createContext(
  {} as {
    characterDetails: AnimeCharacterDetails | null;
    loading: boolean;
    error: string | null;
    getCharacterDetails: () => void;
    setCharacterDetails: Dispatch<SetStateAction<AnimeCharacterDetails | null>>;
  },
);

interface AppProviderProps {
  children: ReactNode;
}

const MovieChatacterDetailsProvider: FC<AppProviderProps> = ({ children }) => {
  const [characterDetails, setCharacterDetails] = useState<AnimeCharacterDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { selectedCharacter } = useMovieCharactersContext();

  const getCharacterDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      setCharacterDetails(null);
      const result = await AnimeService.characterDetails(selectedCharacter.characterId);
      setCharacterDetails(result.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCharacter.characterId) {
      getCharacterDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCharacter.characterId]);

  return (
    <MovieChatacterDetailsContext.Provider
      value={{ error, loading, characterDetails, getCharacterDetails, setCharacterDetails }}
    >
      {children}
    </MovieChatacterDetailsContext.Provider>
  );
};

const useMovieCharacterDetailsContext = () => {
  const context = useContext(MovieChatacterDetailsContext);

  if (!context) {
    throw new Error(
      'MovieChatacterDetailsContext must be used within a MovieChatacterDetailsProvider',
    );
  }

  return context;
};

export { MovieChatacterDetailsProvider, useMovieCharacterDetailsContext };
