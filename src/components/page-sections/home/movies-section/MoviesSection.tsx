import MovieList from '@/components/lists/MovieList';
import { SectionTitle } from '@/components/section-title/SectionTitle';
import MovieCardSkeleton from '@/components/skeletons/MovieCardSkeleton';
import { useMoviesContext } from '@/contexts/MoviesContext';
import ErrorAlert from '@/ui/ErrorAlert';
import Paginate from '@/ui/Paginate';

const MoviesSection = () => {
  const { error, handlePageChange, loading, movieList, pagination } = useMoviesContext();

  return (
    <div className="main-container space-y-4">
      <SectionTitle title="One Piece Movies" color="orange" />
      {loading && <MovieCardSkeleton qty={10} />}
      {error && <ErrorAlert error={error} />}
      {!loading && movieList.length > 0 && <MovieList movies={movieList} />}
      {!loading && movieList.length > 0 && (
        <Paginate pagination={pagination} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default MoviesSection;
