import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import CharacterDetailsCard from '@/components/cards/character-details-card/CharacterDetailsCard';
import CharacterDetailsList from '@/components/lists/CharacterDetailsList';
import CharacterList from '@/components/lists/CharacterList';
import { SectionTitle } from '@/components/section-title/SectionTitle';
import MovieCardSkeleton from '@/components/skeletons/MovieCardSkeleton';
import { routes } from '@/config/routes';
import { useMovieCharactersContext } from '@/contexts/MovieCharactersContext';
import { useMovieCharacterDetailsContext } from '@/contexts/MovieChatacterDetails';
import Button from '@/ui/Button';
import ErrorAlert from '@/ui/ErrorAlert';
import InfoAlert from '@/ui/InfoAlert';

const CharacterDetaiilsSection = () => {
  const { selectedCharacter } = useMovieCharactersContext();
  const { characterDetails, error, loading } = useMovieCharacterDetailsContext();
  const router = useRouter();

  return (
    <div className="main-container space-y-6">
      <SectionTitle
        title={`${
          selectedCharacter.characterId
            ? `Showing ${selectedCharacter.characterName}'s information`
            : 'No anime character selected'
        }`}
      />
      {loading && <MovieCardSkeleton qty={1} />}
      {error && <ErrorAlert error={error} />}
      {!loading && characterDetails && <CharacterDetailsList characterDetails={characterDetails} />}
      {!loading && !characterDetails && <InfoAlert text="There is no data to display" />}
      <div className="flex items-center justify-center">
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    </div>
  );
};

export default CharacterDetaiilsSection;
