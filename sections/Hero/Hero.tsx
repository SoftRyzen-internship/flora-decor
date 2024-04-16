import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const Hero = () => {
  return (
    <Section sectionId="hero" variant="heroSection" className="hero ">
      <Container>
        <h1 className="text-titleMd font-geologica leading-[0.9] text-main mb-[15px]">
          Оживіть свій простір
        </h1>
        <p className="text-subtitleXs font-geologica text-description mb-[30px]">
          Ексклюзивні квіти в вазонах для вашого дому або офісу!
        </p>
        <Button isLink isDisabled={false} isOrderLink>
          Замовити
        </Button>
      </Container>
    </Section>
  );
};
