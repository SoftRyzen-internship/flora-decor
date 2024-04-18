import { AdvantagesCard } from '@/components/AdvantagesCard';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import { advantagesIcons } from '@/data/advantagesIcons';

export const Advantages = () => {
  return (
    <Section variant="otherSection" sectionId={'advantages'}>
      <Container>
        <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] advantage-list xl:gap-[124px]">
          {advantagesIcons.map((icon, id) => {
            return (
              <AdvantagesCard
                key={id}
                description={icon.text}
                icon={icon.component}
              />
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
