'use client';

import { Container } from '@/components/Container';
import { PotWithVolume } from '@/components/PotWithVolume';
import { Section } from '@/components/Section';
// import { CustomScrollbar } from '@/components/CustomScrollbar';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

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
          style={{ height: '300px', display: 'flex' }}
          className="slider"
          modules={[FreeMode, Scrollbar, Mousewheel]}
        >
          {pots.map(pot => {
            return (
              <SwiperSlide key={pot}>
                <PotWithVolume volume={pot} />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <div>
              <p>Слайд 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>Слайд 2</p>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* <ul className="flex items-end gap-[40px] md:gap-[70px] w-[1601px] md:w-[1786px] xl:w-[1853px] whitespace-nowrap">
          {pots.map((pot: string) => {
            return <PotWithVolume key={pot} volume={pot} />;
          })}
        </ul> */}
      </Container>
    </Section>
  );
};
