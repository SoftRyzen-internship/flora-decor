'use client';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';

import about from '@/data/about.json';

export const About = () => {
  const { label, text1, text2, btnText } = about;
  return (
    <Section
      variant="aboutOrContactSection"
      className="bg-bgSecond pt-[377px]   md:pt-[459px]  xl:py-[133px]"
      sectionId="about"
    >
      {/* <div className="relative">
        <div className="absolute top-[-170px] left-0" id="about"></div>
      </div> */}
      <Container>
        <div className=" relative w-full  md:m-auto md:w-[561px] xl:ml-[688px] xl:mr-[63px] xl:w-[589px]">
          <div className="about"></div>

          <SectionTitle
            label={label}
            center={'left'}
            variant={'contactTitle'}
            className="w-full md:text-titleAboutMd md:tracking-[-0.5px] mb-[15px] md:mb-5  md:w-[561px] xl:w-[589px]"
          />
          <p className="w-full mb-[15px] md:mb-[20px] md:w-[485px]  text-description text-[14px] leading-[1.4] tracking-[-0.28px] font-geologica font-medium  xl:text-subtitleMd text-left  xl:w-[544px]">
            {text1}
          </p>
          <p className="w-[304px] mb-[30px] md:mb-[40px]  md:w-[450px]  text-description text-[14px] leading-[1.4] tracking-[-0.28px] font-geologica font-medium xl:text-subtitleMd  text-left  xl:w-[490px]">
            {text2}
          </p>
          <Button isLink isOrderLink isDisabled={false}>
            {btnText}
          </Button>
        </div>
      </Container>
    </Section>
  );
};
