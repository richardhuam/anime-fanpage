import React, { FC } from 'react';

import MovieCard from '../cards/movie-card/MovieCard';
import MovieCardProps from '../cards/movie-card/MovieCardTypes';

export interface MovieListProps {
  movies: MovieCardProps[];
}

const MovieList: FC<MovieListProps> = ({ movies = [] }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xs:gap-0.5 sm:gap-3 lg:gap-4 mx-auto">
        {movies.map(movie => (
          <MovieCard key={movie.movieId} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
