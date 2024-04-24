import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import data from '@/data/hero.json';

export const Hero = () => {
  const { title, subtitle, btnText } = data;

  return (
    <Section sectionId="hero" variant="heroSection" className="hero">
      <Container>
        <h1 className="text-titleMd leading-[0.9] h-[99px] md:h-[141px] xl:h-[178px] font-geologica text-main mb-[15px] md:mb-5 md:text-heroTitleMd xl:text-heroTitleXl md:w-[455px] xl:w-[558px]">
          {title}
        </h1>
        <p className="text-subtitleXs font-geologica text-description md:text-subtitleMdCol mb-[30px] md:mb-10 md:text-subtitleMd md:w-[318px]">
          {subtitle}
        </p>
        <Button isLink isDisabled={false} isOrderLink>
          {btnText}
        </Button>
      </Container>
    </Section>
  );
};
