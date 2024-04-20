import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

import { Accordion } from '@/components/Accordion';

export const EXAMPLE = () => {
  return (
    <>
      <Section sectionId="hero" className="" variant="heroSection">
        <Container>
          <Accordion />
        </Container>
      </Section>
    </>
  );
};
