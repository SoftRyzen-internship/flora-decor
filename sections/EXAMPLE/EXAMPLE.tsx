'use client';

// import Image from 'next/image';
// import { getProducts } from '@/sanity/requests/getProducts';
import React from 'react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
// import { Modal } from '@/components/Modal/Modal';

import { Button } from '@/components/Button';

import { type PotPropsType } from '@/components/PotWithVolume/PotWithVolume';

import { SocialLinks } from '@/components/SocialLinks';
import { AdvantagesCard } from '@/components/AdvantagesCard';

import advantages from '@/data/advantages.json';

import { PotWithVolume } from '@/components/PotWithVolume';

import data from '@/data/pots.json';
// import { Ultra } from 'next/font/google';

export const EXAMPLE = async () => {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const products = await getProducts();
  const { icons } = advantages;
  const { pots } = data;

  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  // const closeModal = () => {
  //   setIsOpenModal(false);
  // };

  return (
    <Section sectionId="hero" variant="heroSection">
      <Container>
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
        <div className="flex flex-col gap-2 mt-5">
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
        </div>
        <div className="bg-[#224722]">
          <SocialLinks />
        </div>
        {/* <button onClick={openModal}>OPEN MODAL</button>
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            closeModal={closeModal}
            ariaLabel="закрити"
            closeBtnStyles=""
            modalStyles={'w-[300px] h-[200px] bg-white'}
            isBurgerMenu={false}
            isPopUp={true}
          >
            <p>Modal</p>
          </Modal>
        )} */}
        <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] xl:gap-[124px]">
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
        <ul className="flex items-end gap-[50px] md:gap-[76px] w-[1096px] md:w-[1320px]">
          {pots.map((pot: PotPropsType) => {
            return <PotWithVolume key={pot.volume} volume={pot.volume} />;
          })}
        </ul>
      </Container>
    </Section>
  );
};
