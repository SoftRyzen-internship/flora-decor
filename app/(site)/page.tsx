import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { Questions } from '@/sections/Questions';
import { Contacts } from '@/sections/Contacts';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';

import { getProducts } from '@/sanity/requests/getProducts';
import { Reviews } from '@/sections/Reviews';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods products={products} />
      <Reviews />
      <Questions />
      <Contacts />

      <EXAMPLE />

      {/* <Gallery /> */}
    </>
  );
}
