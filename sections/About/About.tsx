'use client';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';

import about from '@/data/about.json';

export const About = () => {
  const { label, text1, text2 } = about;
  return (
    <Section
      sectionId="about"
      variant="aboutOrContactSection"
      className="bg-bgSecond pt-[377px]   md:pt-[459px]  xl:py-[133px]"
    >
      <Container>
        <div className=" relative w-full  md:m-auto md:w-[561px] xl:ml-[688px] xl:mr-[63px] xl:w-[589px]">
          <div className="about"></div>

          <SectionTitle
            className="w-full text-[20px] leading-[1.2] font-semibold tracking-[-0.4px] md:text-titleAboutMd mb-[15px] md:mb-5  md:w-[561px] xl:w-[589px]"
            label={label}
            center={'left'}
            variant={'otherTitle'}
          />
          <p className="w-full mb-[15px] md:mb-[20px] md:w-[485px]  text-description text-[14px] leading-[1.4] tracking-[-0.28px] font-geologica font-medium  xl:text-subtitleMd text-left  xl:w-[544px]">
            {text1}
          </p>
          <p className="w-[304px] mb-[30px] md:mb-[40px]  md:w-[450px]  text-description text-[14px] leading-[1.4] tracking-[-0.28px] font-geologica font-medium xl:text-subtitleMd  text-left  xl:w-[490px]">
            {text2}
          </p>
          <Button isBtn isDisabled={false}>
            Замовити
          </Button>
        </div>
      </Container>
    </Section>
  );
};
