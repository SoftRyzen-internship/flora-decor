'use client';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Product } from './types';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/SectionTitle';

import { getProducts } from '@/sanity/requests/getProducts';
import goods from '@/data/goods.json';
import { Button } from '@/components/Button';

export const Goods = async () => {
  const products = await getProducts();
  const { label, text } = goods;
  return (
    <Section sectionId="goods" variant="otherSection" className="bg-bgSecond">
      <Container>
        <div className="flex flex-col gap-[15px] md:gap-5 xl:flex-row xl:justify-between mb-[30px] md:mb-[50px] xl:mb-[64px] ">
          <SectionTitle
            label={label}
            center={'left'}
            variant={'otherTitle'}
            className="text-main md:text-titleMd xl:text-[60px] "
          />
          <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-main font-geologica font-medium  md:text-subtitleMd text-left md:w-[416px] xl:w-[480px] xl:mr-[172px] ">
            {text}
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-[15px] justify-between items-start xl:justify-start mb-[30px] md:mb-[50px] xl:mb-0 ">
          {products.map(({ _id, product, image, volumes, price }: Product) => {
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
        </div>

        <Button isLink={false} isBtn isDisabled={false} type="button">
          Більше
        </Button>
      </Container>
    </Section>
  );
};
