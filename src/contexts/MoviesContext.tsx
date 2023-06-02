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

import MovieCardProps from '@/components/cards/movie-card/MovieCardTypes';
import { Pagination } from '@/models/api.model';
import { MovieCharacters } from '@/models/character.model';
import { AnimeMovieList } from '@/models/movie-list.model';
import { AnimeService } from '@/services/anime.service';

interface SelectedMovie {
  movieId: number;
  movieTitle: string;
}

const MoviesContext = createContext(
  {} as {
    movieList: MovieCardProps[];
    selectedMovie: SelectedMovie;
    movieCharacters: MovieCharacters[];
    pagination: Pagination;
    loading: boolean;
    error: string | null;
    getMovieList: () => void;
    handlePageChange: (page: number) => void;
    setMovieCharacters: Dispatch<SetStateAction<MovieCharacters[]>>;
    setSelectedMovie: Dispatch<SetStateAction<SelectedMovie>>;
  },
);

interface MoviesProviderProps {
  children: ReactNode;
}

const MoviesProvider: FC<MoviesProviderProps> = ({ children }) => {
  const [movieList, setMovieList] = useState<MovieCardProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie>({
    movieId: 0,
    movieTitle: '',
  });
  const [movieCharacters, setMovieCharacters] = useState<MovieCharacters[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 0,
      total: 0,
      per_page: 10,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMovieList = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await AnimeService.moviesList({ page: pagination.current_page });

      const adaptedMoviesList = result?.data?.map((movie: AnimeMovieList) => {
        return {
          movieId: movie.mal_id,
          duration: movie.duration,
          releaseDate: movie.aired,
          genres: movie.genres,
          score: movie.score,
          studios: movie.studios,
          images: movie.images,
          title: movie.title,
          title_english: movie.title_english,
          title_japanese: movie.title_japanese,
          synopsis: movie.synopsis,
        } as MovieCardProps;
      });

      if (result.pagination) {
        const pagination: Pagination = {
          last_visible_page: result.pagination.last_visible_page,
          has_next_page: result.pagination.has_next_page,
          current_page: result.pagination.current_page,
          items: {
            count: result.pagination.items.count,
            total: result.pagination.items.total,
            per_page: result.pagination.items.per_page,
          },
        };

        setPagination(pagination);
      }

      setMovieList(adaptedMoviesList);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      current_page: page,
    }));
  };

  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.current_page]);

  return (
    <MoviesContext.Provider
      value={{
        movieList,
        selectedMovie,
        movieCharacters,
        pagination,
        loading,
        error,
        getMovieList,
        handlePageChange,
        setMovieCharacters,
        setSelectedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('useMoviesContext must be used within a MoviesProvider');
  }

  return context;
};

export { MoviesProvider, useMoviesContext };
