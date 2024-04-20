'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

import { Container } from '@/components/Container';
import { PotWithVolume } from '@/components/PotWithVolume';
import { Section } from '@/components/Section';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export const Flowerpots = () => {
  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <Section variant="flowerpotsSection">
      <Container>
        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          freeMode={true}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          className="slider h-[254px] md:h-[274px] xl:h-[288px] w-full"
          modules={[FreeMode, Scrollbar, Mousewheel]}
        >
          {pots.map(pot => {
            return (
              <SwiperSlide key={pot}>
                <PotWithVolume volume={pot} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};
