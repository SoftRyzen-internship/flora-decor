import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

import { Logo } from '@/components/Logo';
export const EXAMPLE = () => {
  return (
    <Section sectionId="hero" variant="heroSection">
      <Container>
        <Logo isHeader />
        <SectionTitle
          label="Section Title"
          center="center"
          variant="otherTitle"
        />
        <SectionTitle
          label="Section Title for contacts"
          center="left"
          variant="contactTitle"
        />
      </Container>
    </Section>
  );
};
