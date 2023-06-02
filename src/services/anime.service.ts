import { ApiResponse } from '@/models/api.model';
import { MovieCharacters } from '@/models/character.model';
import { AnimeCharacterDetails } from '@/models/character-details.model';
import { AnimeMovieList } from '@/models/movie-list.model';

import { AxiosInstance } from './api.service';

interface MoviesListServiceProps {
  animeName?: string;
  page: number;
  limit?: number;
}

const moviesList = ({
  animeName = 'One Piece',
  limit = 10,
  page,
}: MoviesListServiceProps): Promise<ApiResponse<AnimeMovieList[]>> => {
  return AxiosInstance.get(`/anime?q=${animeName}&type=Movie&limit=${limit}&page=${page}`).then(
    res => res.data,
  );
};

const characterByMovie = (movieId: number): Promise<ApiResponse<MovieCharacters[]>> => {
  return AxiosInstance.get(`/anime/${movieId}/characters`).then(res => res.data);
};
const characterDetails = (characterId: number): Promise<ApiResponse<AnimeCharacterDetails>> => {
  return AxiosInstance.get(`/characters/${characterId}/full`).then(res => res.data);
};

export const AnimeService = { moviesList, characterByMovie, characterDetails };
