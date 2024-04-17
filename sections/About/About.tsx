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
      className="about pt-[377px]  pb-[60px] md:pt-[459px] md:pb-[70px] xl:py-[133px]"
    >
      {/* <div className="mb-[30px] h-[347px] bg-bgSecond  overflow-hidden rounded-br-[90px]"></div> */}
      <Container>
        <div className=" w-full  md:m-auto md:w-[561px] xl:ml-auto xl:mr-[63px] xl:w-[589px]">
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
          <Button isLink isBtn isDisabled={false}>
            Замовити
          </Button>
        </div>
      </Container>
    </Section>
  );
};
