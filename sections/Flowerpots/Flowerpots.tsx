'use client';

import { Container } from '@/components/Container';
import { PotWithVolume } from '@/components/PotWithVolume';
import { Section } from '@/components/Section';
import { CustomScrollbar } from '@/components/CustomScrollbar';

export const Flowerpots = () => {
  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <Section variant="flowerpotsSection">
      <Container>
        <CustomScrollbar>
          <ul className="flex items-end gap-[40px] md:gap-[70px] w-[1601px] md:w-[1786px] xl:w-[1853px] whitespace-nowrap">
            {pots.map((pot: string) => {
              return <PotWithVolume key={pot} volume={pot} />;
            })}
          </ul>
        </CustomScrollbar>
      </Container>
    </Section>
  );
};
