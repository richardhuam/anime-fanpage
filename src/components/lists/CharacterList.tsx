import React, { FC } from 'react';

import { MovieCharacters } from '@/models/character.model';

import CharacterCard from '../cards/character-card/CharacterCard';

export interface CharacterListProps {
  characters: MovieCharacters[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xs:gap-0.5 sm:gap-3 lg:gap-4 mx-auto">
        {characters.map(char => (
          <CharacterCard key={char.character.mal_id} {...char} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
