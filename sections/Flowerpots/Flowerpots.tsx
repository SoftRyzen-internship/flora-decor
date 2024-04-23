'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

import { Container } from '@/components/Container';
import { PotWithVolume } from '@/components/PotWithVolume';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';

import data from '@/data/flowerpots.json';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export const Flowerpots = () => {
  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];
  const { title, subtitle } = data;

  return (
    <Section variant="flowerpotsSection" className="bg-bgMain">
      <Container>
        <div className="flex flex-col gap-[15px] mb-[30px] md:gap-5 md:mb-[50px] xl:flex-row xl:gap-[170px] xl:items-center">
          <SectionTitle
            label={title}
            center="left"
            variant="otherTitle"
            className="text-titleSm md:text-heroTitleSm md:leading-[1.1] xl:text-titleXl"
          />
          <p className="font-geologica text-main text-subtitleXs md:text-subtitleMd md:w-[322px]">
            {subtitle}
          </p>
        </div>

        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          freeMode={true}
          scrollbar={{ draggable: true }}
          className="slider h-[260px] md:h-[280px] xl:h-[294px] w-full"
          modules={[FreeMode, Scrollbar]}
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
