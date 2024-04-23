import React from 'react';

import { Button } from '../Button';
import { ProductCard } from '../ProductCard';
import { Product } from '@/sections/Goods/types';

type ShowcaseProps = {
  cards: Product[];
  isMore: boolean;
  loadMoreCards: () => void;
  hideExtraCards: () => void;
};

export const Showcase: React.FC<ShowcaseProps> = ({
  cards,
  isMore,
  loadMoreCards,
  hideExtraCards,
}) => {
  return (
    <>
      <ul className="flex flex-row flex-wrap gap-[30px] md:grid  md:grid-cols-2 md:gap-x-[44px] md:gap-y-[30px] xl:grid-cols-3 xl:gap-x-[15px] xl:gap-y-9 mb-[30px] md:mb-[50px] xl:mb-0 ">
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
    </>
  );
};
