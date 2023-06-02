import { ApiResponse } from '@/models/api.model';
import { AnimeCharacter } from '@/models/character.model';
import { AnimeCharacterDetails } from '@/models/character-details.model';
import { AnimeMovieList } from '@/models/movie-list.model';

import { AxiosInstance } from './api.service';

const moviesList = (animeName: string = 'One Piece'): Promise<ApiResponse<AnimeMovieList[]>> => {
  return AxiosInstance.get(`/anime?q=${animeName}&type=Movie`).then(res => res.data);
};

const characterByMovie = (movieId: number): Promise<ApiResponse<AnimeCharacter[]>> => {
  return AxiosInstance.get(`/anime/${movieId}/characters`).then(res => res.data);
};
const characterDetails = (characterId: number): Promise<ApiResponse<AnimeCharacterDetails>> => {
  return AxiosInstance.get(`/characters/${characterId}/full`).then(res => res.data);
};

export const AnimeService = { moviesList, characterByMovie, characterDetails };
