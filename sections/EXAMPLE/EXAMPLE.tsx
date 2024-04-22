import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

import { Form } from '@/components/Form';
import { ReviewsCard } from '@/components/ReviewsCard';

export const EXAMPLE = () => {
  return (
    <>
      <Section sectionId="hero" className="bg-bgSecond" variant="heroSection">
        <Container>
          <Form />
          <ReviewsCard />
        </Container>
      </Section>
    </>
  );
};
