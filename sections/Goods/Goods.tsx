'use client';
import React, { useRef } from 'react';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Product } from './types';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/SectionTitle';
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
      id="goods"
      className="bg-bgSecond pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[120px] xl:pb-[120px]"
      ref={sectionRef}
    >
      <Container>
        <div className="flex flex-col gap-[15px] md:gap-5 xl:flex-row xl:justify-between mb-[30px] md:mb-[50px] xl:mb-[64px] ">
          <SectionTitle label={label} center={'left'} variant={'otherTitle'} />
          <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-main font-geologica font-medium  md:text-subtitleMd text-left md:w-[416px] xl:w-[480px] xl:mr-[172px] ">
            {text}
          </p>
        </div>

        <ul className="flex flex-row flex-wrap xl:gap-[15px] justify-between items-start xl:justify-start  xl:mb-0 ">
          {cards.map(({ _id, product, image, volumes, price }: Product) => {
            return (
              <ProductCard
                key={_id}
                product={product}
                image={image}
                volumes={volumes}
                price={price}
              />
            );
          })}
        </ul>

        <Button
          isLink={false}
          isBtn
          onClick={isMore ? loadMoreCards : hideExtraCards}
          isDisabled={false}
          type="button"
          className="xl:hidden"
        >
          {isMore ? 'Більше' : 'Сховати'}
        </Button>
      </Container>
    </section>
  );
};
