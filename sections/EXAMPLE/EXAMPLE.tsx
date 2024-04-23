import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

import { Slider } from '@/components/Slider';
import { getReviews } from '@/sanity/requests/getReviews';

export const EXAMPLE = async () => {
  const reviews = await getReviews();

  return (
    <Section variant="otherSection" className="bg-bgSecond">
      <Container>
        <Slider reviews={reviews} />
      </Container>
    </Section>
  );
};
