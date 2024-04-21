import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { GalleryImgItem } from '@/components/GalleryImgItem';

import { galleryImg } from '@/data/gallery';
import data from '@/data/common.json';

export const Gallery = () => {
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
        <p className="text-subtitleXs font-geologica not-italic text-subtitle mt-[15px] mb-[30px] md:mb-[50px] xl:mt-5 xl:mb-16 md:w-[430px] ml-auto mr-auto md:text-center xl:w-[681px]">
          {gallery.subtitle}
        </p>
        <ul className="flex flex-col gap-[15px] gallery-list md:flex-row md:flex-wrap md:gap-6 justify-center">
          {galleryImg.map(({ img, alt }) => (
            <GalleryImgItem img={img} alt={alt} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};
