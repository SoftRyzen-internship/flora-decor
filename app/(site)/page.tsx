import { Hero } from '@/sections/Hero';
import { Advantages } from '@/sections/Advantages';
import { About } from '@/sections/About';
import { Flowerpots } from '@/sections/Flowerpots';
import { Goods } from '@/sections/Goods';
import { Gallery } from '@/sections/Gallery';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';
import { ExampleModal } from '@/sections/ExampleModal/ExampleModal';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Flowerpots />
      <Goods />
      <Gallery />
      <EXAMPLE />
      <ExampleModal />

      {/* <Reviews /> */}
      {/* <Questions /> */}
      {/* <Contacts />  */}
    </>
  );
}
