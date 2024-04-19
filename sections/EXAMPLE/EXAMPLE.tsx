import React from 'react';

import { Goods } from '../Goods';
import { About } from '../About';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Accordion } from '@/components/Accordion';

// import { AdvantagesCard } from '@/components/AdvantagesCard';

// import { Form } from '@/components/Form';
// import { PotWithVolume } from '@/components/PotWithVolume';

// import { Ultra } from 'next/font/google';

export const EXAMPLE = () => {
  // const { icons } = advantages;
  // const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <>
      <About />
      <Goods />
      <Section sectionId="hero" className="" variant="heroSection">
        <Container>
          <Accordion />
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

          {/* <div className=" py-10">
            <Form />
          </div> */}

          {/* <div className="flex flex-col gap-2 mt-5">
          <p> Лінк в хедері/ розміри тільки для десктопу</p>
          <Button isLink isHeaderLink isDisabled={false}>
            Залишити заявку
          </Button>
          <p> Лінк в секціях</p>
          <Button isLink isOrderLink isDisabled={false}>
            Замовити
          </Button>
          <p> Кнопка більше </p>
          <Button isLink={false} isBtn isDisabled={false} type="button">
            Більше
          </Button>
          <p> Кнопка сховати </p>
          <Button isLink={false} isBtn isDisabled={false} type="button">
            сховати
          </Button>
          <p> Кнопка сабміт </p>
          <Button isLink={false} isBtn isDisabled={false} type="submit">
            Замовити
          </Button>
          <p> Кнопка дісейблед</p>
          <Button isLink={false} isBtn isDisabled={true} type="submit">
            Замовити
          </Button>
        </div> */}
          {/* <div className="bg-[#224722]">
          <SocialLinks />
        </div> */}
          {/* <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
          ariaLabel="закрити"
          closeBtnStyles="top-[30px] right-[30px]"
          modalStyles={'w-[300px] h-[200px] bg-white'}
          isBurgerMenu={false}
          isPopUp={true}
        >
          <p>Children</p>
        </Modal> */}
          {/* <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] xl:gap-[124px]">


        {/* <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] xl:gap-[124px]">

          {advantagesIcons.map((icon, id) => {
            return (
              <AdvantagesCard
                key={id}
                description={icon.text}
                icon={icon.component}
              />
            );
          })}
        </ul> */}

          {/* <ul className="flex items-end gap-[40px] md:gap-[70px] w-[1482px] md:w-[1786px] xl:w-[1853]">
          {pots.map((pot: string) => {
            return <PotWithVolume key={pot} volume={pot} />;
          })}
        </ul> */}
        </Container>
      </Section>
    </>
  );
};
