import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Form } from '@/components/Form';

export const EXAMPLE = () => {
  return (
    <Section sectionId="hero" className="bg-bgSecond" variant="heroSection">
      <Container>
        <Form />
      </Container>
    </Section>
  );
};
