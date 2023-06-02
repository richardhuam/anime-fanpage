import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { routes } from '@/config/routes';
import { useMoviesContext } from '@/contexts/MoviesContext';
import Badge from '@/ui/Badge';
import Button from '@/ui/Button';
import { formatDate } from '@/utils/format-date';

import MovieCardData from './MovieCardTypes';

const MovieCard: FC<MovieCardData> = props => {
  const { setSelectedMovie } = useMoviesContext();

  return (
    <div className="group bg-white w-full sm:max-w-[245px] rounded-md border-1 border-[#f1f1f1] relative shadow-sm">
      <div>
        <div className="flex w-auto h-[320px] md:h-[341px] items-center justify-center relative overflow-hidden">
          <Image
            src={props.images.jpg.image_url}
            alt={`anime-${props.title}`}
            fill
            priority={true}
            className="object-cover group-hover:scale-105 transition-all duration-150 delay-100 cursor-pointer opacity-95 hover:opacity-100"
          />
        </div>
        <div className="p-2.5">
          <div className="mt-1">
            <h2 className="text-13 text-gray-800 line-clamp-2 md:text-14 font-semibold uppercase">
              {props.title}
            </h2>
            <p className="text-12 text-gray-500">{props.title_japanese}</p>
          </div>
          <div className="mt-3">
            <p className="text-13 line-clamp-3 text-gray-600">{props.synopsis}</p>
          </div>
          <div className="mt-2">
            <p className=" text-gray-700 font-medium text-13">
              Release Date:{' '}
              <span className="text-gray-600">{formatDate(props.releaseDate.from)}</span>
            </p>
          </div>
          <div className="mt-2">
            <p className=" text-gray-700 font-medium text-13">
              Rating: <span className="text-gray-700 font-medium">{props.score}</span>
            </p>
          </div>
          <div className="mt-3">
            <p className="text-13 font-medium text-gray-600 mb-2">Tags:</p>
            <div className="flex flex-wrap items-center justify-start gap-2">
              {props.genres.map(item => (
                <Badge key={item.mal_id} text={item.name} />
              ))}
            </div>
          </div>
          <div className="mt-3">
            <Link
              href={routes.characters}
              onClick={() => setSelectedMovie({ movieId: props.movieId, movieTitle: props.title })}
            >
              <Button size="small" variant="outline">
                See Characters
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-4">
        <span className="bg-red-600 rounded-sm cursor-default text-white text-12 font-medium px-2 py-0.5">
          {props.duration}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
