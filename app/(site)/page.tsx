import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { Reviews } from '@/sections/Reviews';
import { Questions } from '@/sections/Questions';
import { Contacts } from '@/sections/Contacts';
import { Gallery } from '@/sections/Gallery';

import { getProducts } from '@/sanity/requests/getProducts';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods products={products} />
      <Gallery />
      <Reviews />
      <Questions />
      <Contacts />
    </>
  );
}
