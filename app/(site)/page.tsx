import { Advantages } from '@/sections/Advantages';
import { EXAMPLE } from '@/sections/EXAMPLE/EXAMPLE';
import { ExampleModal } from '@/sections/ExampleModal/ExampleModal';
import { Hero } from '@/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <EXAMPLE />
      <ExampleModal />
      <Advantages />
      {/* {/* <About />
      <Flowerpots />
      <Goods />
      <Gallery />
      <Reviews />
      <Questions />
      <Contacts /> */}
    </>
  );
}
