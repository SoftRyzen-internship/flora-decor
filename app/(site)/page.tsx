import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';
import { ExampleModal } from '@/sections/ExampleModal/ExampleModal';
import { Questions } from '@/sections/Questions';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods />
      <Questions />

      <EXAMPLE />
      <ExampleModal />

      {/* <Gallery /> */}
      {/* <Reviews /> */}
      {/* <Contacts />  */}
    </>
  );
}
