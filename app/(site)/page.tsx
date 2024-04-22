import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { Questions } from '@/sections/Questions';
import { Contacts } from '@/sections/Contacts';
import { Gallery } from '@/sections/Gallery';

import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods />
      <Gallery />
      <Questions />
      <Contacts />
      <EXAMPLE />

      {/* <Reviews /> */}
    </>
  );
}
