// import Image from 'next/image';
// import { getProducts } from '@/sanity/requests/getProducts';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Logo } from '@/components/Logo';
import { AdvantagesCard } from '@/components/AdvantagesCard';

import React from 'react';

import { icons } from '@/utils/icons';

export const EXAMPLE = async () => {
  // const products = await getProducts();

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
        {/* <div className="flex flex-row justify-center  gap-11">
          <Image
            width={344}
            height={420}
            alt={products[0].product}
            src={products[0].image}
            priority={true}
            placeholder="blur"
            blurDataURL={products[0].image}
          />
          <Image
            width={262}
            height={320}
            alt={products[1].product}
            src={products[1].image}
            priority={true}
            placeholder="blur"
            blurDataURL={products[1].image}
          />
        </div> */}
        <ul className="flex flex-col md:flex-row  md:mx-[2px] ">
          {icons.map(icon => {
            return (
              <li key={icon.id} className="custom-width">
                <AdvantagesCard
                  description={icon.text}
                  icon={icon.component}
                  iconWidth={icon.width}
                  iconHeight={icon.height}
                  isFirstCard={icon.isFirstCard}
                  isMiddleCard={icon.isMiddleCard}
                  isLastCard={icon.isLastCard}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
