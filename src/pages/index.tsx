import HeroCarousel from '@/components/hero-carousel/HeroCarousel';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/models/page.model';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeroCarousel />
      <h1 className="font-bold">Home Page</h1>
    </>
  );
};

HomePage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
