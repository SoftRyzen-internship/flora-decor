import {
  Hero,
  Advantages,
  About,
  Flowerpots,
  Goods,
  Gallery,
  Reviews,
  Questions,
  Contacts,
} from '@/sections';
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
      <Reviews />
      <Questions />
      <Contacts />
      <EXAMPLE />
    </>
  );
}
