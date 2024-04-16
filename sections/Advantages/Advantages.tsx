import { AdvantagesCard } from '@/components/AdvantagesCard';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import advantages from '@/data/advantages.json';

export const Advantages = () => {
  const { icons } = advantages;
  return (
    <Section variant="otherSection" sectionId={'advantages'}>
      <Container>
        <ul className="flex flex-col md:flex-row  md:mx-[2px] xl:mx-auto xl:w-[1205px] gap-[70px] md:gap-[82px] xl:gap-[124px]">
          {icons.map(icon => {
            return (
              <AdvantagesCard
                key={icon.id}
                description={icon.text}
                icon={icon.component}
                isMiddleCard={icon.isMiddleCard}
              />
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
