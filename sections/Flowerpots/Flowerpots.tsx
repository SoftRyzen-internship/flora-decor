'use client';
// import { Scrollbars } from 'react-custom-scrollbars-2';
import { Container } from '@/components/Container';
import { PotWithVolume } from '@/components/PotWithVolume';
import { Section } from '@/components/Section';
import { CustomScrollbar } from './CustomScrollbar';

export const Flowerpots = () => {
  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <Section variant="flowerpotsSection">
      <Container>
        {/* react-custom-scrollbars-2*/}
        {/* <div style={{ width: '300px', height: '300px' }}>
          <CustomScrollbar>
            <ul>
              {Array.from({ length: 20 }).map((_, index) => (
                <li key={index}>Item {index + 1}</li>
              ))}
            </ul>
          </CustomScrollbar>
        </div> */}

        {/* tailwind-scrollbar*/}
        {/* <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32 overflow-y-scroll">
          <div className="h-64 bg-slate-400"></div>
        </div> */}

        <CustomScrollbar>
          <ul className="flex items-end gap-[40px] md:gap-[70px] w-[1601px] md:w-[1786px] xl:w-[1853] whitespace-nowrap">
            {pots.map((pot: string) => {
              return <PotWithVolume key={pot} volume={pot} />;
            })}
          </ul>
        </CustomScrollbar>
      </Container>
    </Section>
  );
};
