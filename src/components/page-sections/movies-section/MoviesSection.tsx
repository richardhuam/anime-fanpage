import React, { useEffect, useState } from 'react';

import MovieCardProps from '@/components/cards/movie-card/MovieCardTypes';
import MovieList from '@/components/lists/MovieList';
import { SectionTitle } from '@/components/section-title/SectionTitle';
import MovieCardSkeleton from '@/components/skeletons/MovieCardSkeleton';
import { AnimeMovieList } from '@/models/movie-list.model';
import { AnimeService } from '@/services/anime.service';

const MoviesSection = () => {
  const [movieList, setMovieList] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMovieList = async () => {
    try {
      setLoading(true);
      const result = await AnimeService.moviesList();

      const adaptedMoviesList = result.data.map((movie: AnimeMovieList) => {
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

      setMovieList(adaptedMoviesList);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="main-container">
      <SectionTitle title="All movies" color="green" />
      {loading && <MovieCardSkeleton qty={5} />}
      {error && <div>Error Component</div>}
      {!loading && movieList.length > 0 && <MovieList movies={movieList} />}
    </div>
  );
};

export default MoviesSection;
