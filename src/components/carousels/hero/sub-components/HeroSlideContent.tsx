import Image from 'next/image';
import React, { FC } from 'react';

import Button from '@/ui/Button';

interface HeroSlideContentProps {
  title: string;
  description: string;
  image: string;
}

const HeroSlideContent: FC<HeroSlideContentProps> = ({ description, image, title }) => {
  return (
    <div className="flex h-full items-center justify-between xl:px-8 animate-fade-right animate-once">
      <div className="max-w-[65%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[55%] h-full flex items-start justify-start pt-10 sm:pt-14 md:pt-0 md:justify-center flex-col">
        <h1 className="line-clamp-3 text-24 sm:text-25 md:text-35 xl:text-[50px] font-medium leading-7 sm:leading-8 md:leading-10 xl:leading-[63px]">
          {title}
        </h1>
        <p className="line-clamp-2 mt-2 text-15 md:text-18 font-light mb-4">{description}</p>
        <Button
          variant="custom"
          className="py-5 bg-white text-red-700 font-medium hover:bg-gray-50 transition-colors ease-in-out"
        >
          Watch more
        </Button>
      </div>
      <div className="max-w-[35%] md:max-w-[45%] lg:max-w-[55%] xl:max-w-[45px]">
        <Image
          src={image}
          priority
          alt={`anime-${title}`}
          className="absolute right-0 xl:right-20 -bottom-16 xs:-bottom-20 md:-bottom-28 xl:-bottom-32 w-[180px] xs:w-[190px] sm:w-[250px] md:w-[310px] xl:w-400 h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSlideContent;
