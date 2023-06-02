import React, { FC } from 'react';

interface MovieCardSkeletonProps {
  qty?: number;
}

{
  /* <div className="w-full flex items-center justify-center">
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xs:gap-0.5 sm:gap-3 lg:gap-4 mx-auto">
  {movies.map(movie => (
    <MovieCard key={movie.movieId} {...movie} />
  ))}
</div>
</div> */
}

const MovieCardSkeleton: FC<MovieCardSkeletonProps> = ({ qty = 1 }) => {
  return (
    <div className="w-full flex items-center justify-center mx-auto">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xs:gap-0.5 sm:gap-3 lg:gap-4 mx-auto">
        {new Array(qty).fill(null).map((_, key) => {
          return (
            <div
              key={key}
              className="w-full sm:min-w-[245px] bg-white rounded-md p-4 border-1 border-[#f1f1f1] mx-auto"
            >
              <div className="animate-pulse flex flex-col">
                <div className="rounded-md bg-slate-100 h-40 w-full"></div>
                <div className="space-y-2 mt-5">
                  <div className="h-2 bg-slate-100 rounded"></div>
                  <div className="h-2 bg-slate-100 rounded"></div>
                  <div className="h-2 bg-slate-100 rounded"></div>
                  <div className="grid grid-cols-5 gap-3">
                    <div className="h-2 bg-slate-100 rounded col-span-3"></div>
                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="h-2.5 w-24 bg-slate-100 rounded"></div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-2.5 bg-slate-100 rounded col-span-2"></div>
                    <div className="h-2.5 bg-slate-100 rounded col-span-1"></div>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-28 bg-slate-100 rounded"></div>
                    <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
