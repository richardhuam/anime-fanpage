import HeroCarousel from '@/components/carousels/hero/HeroCarousel';
import MoviesSection from '@/components/page-sections/home/movies-section/MoviesSection';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/models/page.model';
import PageWrapper from '@/ui/PageWrapper';

const HomePage: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <HeroCarousel />
      <MoviesSection />
    </PageWrapper>
  );
};

HomePage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
