import Image from 'next/image';
import { SectionTitle } from '@/components';
import { getProducts } from '@/sanity/requests/getProducts';

import { Logo } from '@/components/Logo';
export const EXAMPLE = async () => {
  const products = await getProducts();
  return (
    <section>
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
      <div className="flex flex-row justify-center  gap-11">
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
      </div>
    </section>
  );
};
