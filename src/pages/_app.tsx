import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import '@/styles/globals.css';

import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/models/page.model';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  const getLayout = Component.getLayout ?? (page => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
