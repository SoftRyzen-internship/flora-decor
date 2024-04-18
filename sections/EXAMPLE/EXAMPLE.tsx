// 'use client';

import React from 'react';

import { getProducts } from '@/sanity/requests/getProducts';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

// import { AdvantagesCard } from '@/components/AdvantagesCard';

import { Form } from '@/components/Form';
import { PotWithVolume } from '@/components/PotWithVolume';

import { ProductCard } from '@/components/ProductCard';

// import { advantagesIcons } from '@/data/advantagesIcons';
// import { Ultra } from 'next/font/google';

type Product = {
  _id: string;
  product: string;
  image: string;
  volumes: string[];
  price: string;
};

export const EXAMPLE = async () => {
  const products = await getProducts();

  // const { icons } = advantages;

  const pots = ['11', '12', '13', '14', '15', '17', '19', '23'];

  return (
    <Section
      sectionId="hero"
      className="bg-bgSecond pt-36"
      variant="heroSection"
    >
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
        <div className="m-auto">
          <div className="flex flex-row flex-wrap justify-between items-start xl:justify-start  gap-2">
            {products.map(
              ({ _id, product, image, volumes, price }: Product) => {
                return (
                  <ProductCard
                    key={_id}
                    product={product}
                    image={image}
                    volumes={volumes}
                    price={price}
                  />
                );
              },
            )}
          </div>
        </div>

        <div className=" py-10">
          <Form />
        </div>

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
        </div>
        <div className="bg-[#224722]">
          <SocialLinks />
        </div>
        {/* <Modal
          isOpen={true}
          ariaLabel="закрити"
          closeBtnStyles=""
          modalStyles={'w-[300px] h-[200px] bg-white'}
          isBurgerMenu={true}
          isPopUp={false}
        >
          <p>Modal</p>
        </Modal> */}
        {/* <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] xl:gap-[124px]">
          {icons.map(icon => {

        <div className="flex flex-row flex-wrap gap-2">
          {products.map((product: any) => {
            return (
              <div
                key={product.product}
                className="rounded-xl bg-white aspect-ratio overflow-hidden max-w-[440px] max-h-[495px] md:w-[320px] md:h-[360px] xl:w-[430px] object-cover xl:h-[500px]  "
              >
                <Image
                  width={430}
                  height={500}
                  alt={product.product}
                  src={product.image}
                  placeholder="blur"
                  blurDataURL={product.image}
                />
              </div>
            );
          })}
        </div>

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

        <ul className="flex flex-col items-end gap-[40px] md:gap-[70px] w-1/2 mt-8">
          {pots.map((pot: string) => {
            return <PotWithVolume key={pot} volume={pot} />;
          })}
        </ul>
      </Container>
    </Section>
  );
};
