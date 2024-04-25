'use client';
import React, { useRef } from 'react';

import { Container } from '@/components/Container';
import { Product } from './types';
import { SectionTitle } from '@/components/SectionTitle';
import { Showcase } from '@/components/Showcase';

import { useProductCardsHandler } from '@/hooks/useProductCardsHandler';

import goods from '@/data/goods.json';

type ProductsProps = {
  products: Product[];
};
export const Goods: React.FC<ProductsProps> = ({ products }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { cards, isMore, loadMoreCards, hideExtraCards } =
    useProductCardsHandler(sectionRef, products);

  const { label, text } = goods;

  return (
    <section
      className="bg-bgSecond pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[120px] xl:pb-[120px]"
      ref={sectionRef}
      id="goods"
    >
      {/* <div className="relative">
        <div className="absolute top-[-130px] left-0" id="goods"></div>
      </div> */}
      <Container>
        <div className="flex flex-col gap-[15px] md:gap-5 xl:flex-row xl:justify-between mb-[30px] md:mb-[50px] xl:mb-[64px] ">
          <SectionTitle label={label} center={'left'} variant={'otherTitle'} />
          <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-main font-geologica font-medium  md:text-subtitleMd text-left md:w-[416px] xl:w-[480px] xl:mr-[172px] ">
            {text}
          </p>
        </div>

        <Showcase
          cards={cards}
          isMore={isMore}
          loadMoreCards={loadMoreCards}
          hideExtraCards={hideExtraCards}
        />
      </Container>
    </section>
  );
};
