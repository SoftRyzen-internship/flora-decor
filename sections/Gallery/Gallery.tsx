'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { GalleryImgItem } from '@/components/GalleryImgItem';

import { galleryImg, galleryImgDesktop } from '@/data/gallery';
import data from '@/data/common.json';

export const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });

  const { gallery } = data;

  return (
    <Section variant="otherSection" className="bg-bgMain">
      <Container>
        <SectionTitle
          label={gallery.title}
          center="left"
          variant="otherTitle"
          className="md:text-center"
        />
        <p className="text-subtitleXs md:text-subtitleMd font-geologica not-italic text-subtitle mt-[15px] mb-[30px] md:mb-[50px] xl:mt-5 xl:mb-16 md:w-[430px] ml-auto mr-auto md:text-center xl:w-[681px]">
          {gallery.subtitle}
        </p>
        {isLoaded && (
          <ul className="grid gallery-list md:grid-cols-2 xl:grid-cols-4 relative gap-[15px] md:gap-6 xl:gap-[15px]">
            {isDesktop
              ? galleryImgDesktop.map(({ img, alt }, index) => (
                  <GalleryImgItem
                    key={index}
                    img={img}
                    alt={alt}
                    width={652}
                    height={615}
                  />
                ))
              : galleryImg.map(({ img, alt }, index) => (
                  <GalleryImgItem
                    key={index}
                    img={img}
                    alt={alt}
                    width={330}
                    height={220}
                  />
                ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};
