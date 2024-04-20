import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';
import { ExampleModal } from '@/sections/ExampleModal/ExampleModal';
import { Contacts } from '@/sections/Contacts';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods />
      <EXAMPLE />
      <ExampleModal />

      {/* <Gallery /> */}
      {/* <Reviews /> */}
      {/* <Questions /> */}
      <Contacts />
    </>
  );
}
