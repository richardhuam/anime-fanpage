import {
  JpgImages,
  MovieListAired,
  MovieListGenre,
  MovieListStudio,
  WebpImages,
} from '@/models/movie-list.model';

interface MovieCardProps {
  movieId: number;
  duration: string;
  releaseDate: MovieListAired;
  genres: MovieListGenre[];
  score: number;
  synopsis: string;
  studios: MovieListStudio[];
  images: {
    jpg: JpgImages;
    webp: WebpImages;
  };
  title: string;
  title_english: string;
  title_japanese: string;
}

export default MovieCardProps;
