import React from 'react';

import CharacterDetaiilsSection from '@/components/page-sections/character-details/CharacterDetaiilsSection';
import { useMovieCharacterDetailsContext } from '@/contexts/MovieChatacterDetails';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/models/page.model';
import PageWrapper from '@/ui/PageWrapper';

const CharacteIdPage: NextPageWithLayout = () => {
  const { characterDetails } = useMovieCharacterDetailsContext();

  console.log(characterDetails);

  return (
    <PageWrapper>
      <CharacterDetaiilsSection />
    </PageWrapper>
  );
};

CharacteIdPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>;
};

export default CharacteIdPage;
