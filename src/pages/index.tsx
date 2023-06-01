import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/models/page.model';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="font-bold">Home Page</h1>
    </div>
  );
};

HomePage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
