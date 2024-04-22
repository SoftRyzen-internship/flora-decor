import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

import { Form } from '@/components/Form';
import { Slider } from '@/components/Slider';
import { getReviews } from '@/sanity/requests/getReviews';

export const EXAMPLE = async () => {
  const reviews = await getReviews();

  return (
    <>
      <Section sectionId="hero" className="bg-bgSecond" variant="heroSection">
        <Container>
          <Form />
        </Container>
      </Section>
      <Section variant="otherSection" className="bg-bgSecond">
        <Container>
          <Slider reviews={reviews} />
        </Container>
      </Section>
    </>
  );
};
