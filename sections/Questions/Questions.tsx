import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';

import questions from '@/data/questions.json';

export const Questions = () => {
  const { label } = questions;

  return (
    <Section
      variant="otherSection"
      className="sm:h-[826px] md:h-[811px] xl:h-[834px]"
    >
      <Container>
        <SectionTitle
          label={label}
          center={'left'}
          variant={'otherTitle'}
          className="mb-[30px] w-[300px] md:mb-[50px] xl:mb-[64px] xl:w-full xl:text-center "
        />
        <Accordion />
      </Container>
    </Section>
  );
};
