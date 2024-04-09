import { Container, Section, SectionTitle } from '@/components';

export const About = () => {
  return (
    <Section sectionId="about" isAboutOrContactSection>
      <Container>
        Example About Section
        <SectionTitle
          label="hello"
          center="center"
          variant="contactTitle"
          // className="text-red-500"
        />
        <SectionTitle
          label="hello"
          center="center"
          variant="otherTitle"
          // className="text-red-500"
        />
        <h3 className="text-green-700 font-mulish">hellllloo geologica</h3>
      </Container>
    </Section>
  );
};
