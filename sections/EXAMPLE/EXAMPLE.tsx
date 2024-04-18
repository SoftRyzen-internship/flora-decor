import React from 'react';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Form } from '@/components/Form';
import { PotWithVolume } from '@/components/PotWithVolume';

export const EXAMPLE = () => {
  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <Section sectionId="hero" className="bg-bgSecond" variant="heroSection">
      <Container>
        <ul className="flex flex-col items-end gap-[40px] md:gap-[70px] w-1/2 mt-8">
          {pots.map((pot: string) => {
            return <PotWithVolume key={pot} volume={pot} />;
          })}
        </ul>
        <Form />
      </Container>
    </Section>
  );
};
