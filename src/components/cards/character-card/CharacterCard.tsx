import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { routes } from '@/config/routes';
import { useMovieCharactersContext } from '@/contexts/MovieCharactersContext';
import { MovieCharacters } from '@/models/character.model';
import Button from '@/ui/Button';

const CharacterCard: FC<MovieCharacters> = props => {
  const { setSelectedCharacter } = useMovieCharactersContext();
  return (
    <div className="group bg-white w-full sm:max-w-[245px] rounded-md border-1 border-[#f1f1f1] relative shadow-sm">
      <div>
        <div className="flex w-auto h-[320px] md:h-[341px] items-center justify-center relative overflow-hidden">
          <Image
            src={props.character.images.jpg.image_url}
            alt={`anime-${props.character.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-150 delay-100 cursor-pointer opacity-95 hover:opacity-100"
          />
        </div>
        <div className="p-2.5">
          <div className="mt-1">
            <h2 className="text-13 text-gray-800 line-clamp-2 md:text-14 font-semibold uppercase">
              {props.character.name}
            </h2>
          </div>
          <div className="mt-3">
            <p className="text-13 font-medium text-gray-700 mb-2">Voice Actors:</p>
            <div className="flex flex-wrap items-center justify-start gap-2 max-h-[200px] overflow-y-auto">
              {props.voice_actors.length < 1 ? (
                <p className="text-13 font-medium">No Data Found</p>
              ) : (
                props.voice_actors.map(item => (
                  <div key={item.person.mal_id} className="inline-block w-full">
                    <p className="text-13 font-medium">{item.language}</p>
                    <p className="text-14 text-gray-600">{item.person.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="mt-3">
            <Link
              href={`${routes.characters}/${props.character.mal_id}`}
              onClick={() =>
                setSelectedCharacter({
                  characterId: props.character.mal_id,
                  characterName: props.character.name,
                })
              }
            >
              <Button size="small" variant="outline">
                See Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-4">
        <span className="bg-blue-700 rounded-sm cursor-default text-white text-12 font-medium px-2 py-0.5">
          {props.role}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;
