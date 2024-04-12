import Image from 'next/image';
import { SectionTitle } from '@/components';
import { getProducts } from '@/sanity/requests/getProducts';

import { Logo } from '@/components/Logo';
import { InputField } from '@/components/InputField';
export const EXAMPLE = async () => {
  const products = await getProducts();

  return (
    <section className="bg-bgSecond">
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
      <div className="w-[500px] m-auto ">
        <InputField
          name={'name'}
          label={'ти хто?'}
          placeholder={'Введіть щось'}
          type={'text'}
        />
      </div>

      <div className="flex flex-row justify-center  gap-11">
        <Image
          width={344}
          height={420}
          alt={products[5].product}
          src={products[5].image}
          priority={true}
          placeholder="blur"
          blurDataURL={products[5].image}
        />
        <Image
          width={262}
          height={320}
          alt={products[7].product}
          src={products[7].image}
          priority={true}
          placeholder="blur"
          blurDataURL={products[7].image}
        />
      </div>
    </section>
  );
};
