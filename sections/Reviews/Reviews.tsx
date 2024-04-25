import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { Slider } from '@/components/Slider';

import { getReviews } from '@/sanity/requests/getReviews';
import data from '@/data/reviews.json';

export const Reviews = async () => {
  const { title, subtitle } = data;
  const reviews = await getReviews();
  return (
    <Section
      variant="otherSection"
      className="bg-bgSecond relative xl:pb-[164px]"
      sectionId="reviews"
    >
      <Container>
        <div className="flex flex-col gap-[15px] mb-[15px] md:gap-5 md:mb-[50px] xl:absolute xl:top-[120px] xl:mb-5">
          <SectionTitle
            label={title}
            center="left"
            variant="otherTitle"
            className="xl:text-titleXl"
          />
          <p className="font-geologica text-main text-subtitleXs md:text-subtitleMd md:w-[367px]">
            {subtitle}
          </p>
        </div>
        <Slider reviews={reviews} />
      </Container>
    </Section>
  );
};
