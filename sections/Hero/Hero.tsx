import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const Hero = () => {
  return (
    <Section sectionId="hero" variant="heroSection" className="hero">
      <Container>
        <h1 className="text-titleMd font-geologica leading-[0.9] text-main mb-[15px] md:mb-5 md:text-heroTitleMd xl:text-heroTitleXl xl:w-[558px]">
          Оживіть свій простір
        </h1>
        <p className="text-subtitleXs font-geologica text-description md:text-subtitleMdCol mb-[30px] md:mb-10 md:text-subtitleMd md:w-[318px]">
          Ексклюзивні квіти в вазонах для вашого дому або офісу!
        </p>
        <Button isLink isDisabled={false} isOrderLink>
          Замовити
        </Button>
      </Container>
    </Section>
  );
};
