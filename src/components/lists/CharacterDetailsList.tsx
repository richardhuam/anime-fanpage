import React, { FC } from 'react';

import { AnimeCharacterDetails } from '@/models/character-details.model';

import CharacterDetailsCard from '../cards/character-details-card/CharacterDetailsCard';

export interface CharacterDetailsListProps {
  characterDetails: AnimeCharacterDetails;
}

const CharacterDetailsList: FC<CharacterDetailsListProps> = ({ characterDetails }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <CharacterDetailsCard key={characterDetails.mal_id} {...characterDetails} />
    </div>
  );
};

export default CharacterDetailsList;
