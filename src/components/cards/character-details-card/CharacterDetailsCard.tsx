import Image from 'next/image';
import React, { FC } from 'react';

import { AnimeCharacterDetails } from '@/models/character-details.model';

const CharacterDetailsCard: FC<AnimeCharacterDetails> = props => {
  return (
    <div className="group bg-white w-full flex items-center justify-center flex-col rounded-md border-1 border-[#f1f1f1] relative shadow-sm">
      <div className="flex w-[200px] h-[341px] items-center justify-center relative overflow-hidden">
        <Image
          src={props.images.jpg.image_url}
          alt={`anime-${props.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-150 delay-100 cursor-pointer opacity-95 hover:opacity-100"
        />
      </div>
      <div className="p-2.5 w-full">
        <div className="mt-1">
          <h2 className="text-13 text-gray-800 line-clamp-2 md:text-14 font-semibold uppercase">
            {props.name}
          </h2>
          <p className="text-14 text-gray-600">{props.name_kanji}</p>
          <p className="text-gray-700 font-medium mt-2 text-14">About:</p>
          <p className="text-14 text-gray-600 line-clamp-6">
            {props.about ? props.about : 'No data found'}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-13 font-medium text-gray-800 mb-2">Voice Actors:</p>
          <div className="flex flex-wrap items-center justify-start gap-2 max-h-[200px] overflow-y-auto">
            {props.nicknames.length < 1 ? (
              <p className="text-13 font-medium">No Data Found</p>
            ) : (
              props.nicknames.map(nick => (
                <div key={nick} className="inline-block w-full">
                  <p className="text-13 text-gray-600">{nick}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsCard;
