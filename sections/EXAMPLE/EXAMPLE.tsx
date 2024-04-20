import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

import { Accordion } from '@/components/Accordion';

import { Form } from '@/components/Form';

export const EXAMPLE = () => {
  return (
    <Section sectionId="hero" className="" variant="heroSection">
      <Container>
        <Accordion />
        <div className="bg-[#E7EDDD] mt-4">
          <Form />
        </div>
      </Container>
    </Section>
  );
};
