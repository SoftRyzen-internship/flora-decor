import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';
import { ExampleModal } from '@/sections/ExampleModal/ExampleModal';

import { Contacts } from '@/sections/Contacts';

import { Questions } from '@/sections/Questions';

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
      <Questions />
      <Contacts />
      <EXAMPLE />
      <ExampleModal />

      {/* <Gallery /> */}
      {/* <Reviews /> */}
    </>
  );
}
