import {
  urlForImageDesktopLarge,
  urlForImageDesktop,
  urlForImageTabletAndMobileLarge,
  urlForImageTabletAndMobile,
} from '@/sanity/lib/image';
import { getProducts } from '@/sanity/requests/getProducts';
import Image from 'next/image';
import React from 'react';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-row justify-center  gap-11">
      <Image
        width={344}
        height={420}
        alt={products[0].image.alt}
        src={urlForImageDesktopLarge(products[0].image)}
        priority={true}
        placeholder="blur"
        blurDataURL={urlForImageDesktop(products[0].image)}
      />
      <Image
        width={262}
        height={320}
        alt={products[0].image.alt}
        src={urlForImageTabletAndMobileLarge(products[1].image)}
        priority={true}
        placeholder="blur"
        blurDataURL={urlForImageTabletAndMobile(products[1].image)}
      />
    </div>
  );
}
