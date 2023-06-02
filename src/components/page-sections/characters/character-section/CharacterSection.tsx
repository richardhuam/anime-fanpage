import Link from 'next/link';
import React from 'react';

import CharacterList from '@/components/lists/CharacterList';
import { SectionTitle } from '@/components/section-title/SectionTitle';
import MovieCardSkeleton from '@/components/skeletons/MovieCardSkeleton';
import { routes } from '@/config/routes';
import { useMovieCharactersContext } from '@/contexts/MovieCharactersContext';
import { useMoviesContext } from '@/contexts/MoviesContext';
import Button from '@/ui/Button';
import ErrorAlert from '@/ui/ErrorAlert';
import InfoAlert from '@/ui/InfoAlert';

const CharacterSection = () => {
  const { selectedMovie } = useMoviesContext();
  const { charactersList, error, loading } = useMovieCharactersContext();

  return (
    <div className="main-container space-y-6">
      <SectionTitle
        title={`${
          selectedMovie.movieId
            ? `Showing anime characters from: ${selectedMovie.movieTitle}`
            : 'No anime movie is selected'
        }`}
      />
      {loading && <MovieCardSkeleton qty={10} />}
      {error && <ErrorAlert error={error} />}
      {!loading && charactersList.length > 0 && <CharacterList characters={charactersList} />}
      {!loading && charactersList.length < 1 && <InfoAlert text="There is no data to display" />}
      <div className="flex items-center justify-center">
        <Link href={routes.home}>
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterSection;
