import React from 'react';

import CharacterSection from '@/components/page-sections/characters/character-section/CharacterSection';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/models/page.model';
import PageWrapper from '@/ui/PageWrapper';

const CharacterPage: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <CharacterSection />
    </PageWrapper>
  );
};

CharacterPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>;
};

export default CharacterPage;
