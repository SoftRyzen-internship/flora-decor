import { Container } from '@/components/Container';
import { Form } from '@/components/Form';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';

import contacts from '@/data/contacts.json';

export const Contacts = () => {
  const { label } = contacts;
  return (
    <Section
      variant="aboutOrContactSection"
      className="contacts pt-[420px] md:pt-[555px] xl:py-[101px] scroll-mt-[75px]"
      sectionId="contacts"
    >
      <Container>
        <div className="w-full  xl:w-[541px] xl:mr-[111px] xl:ml-auto ">
          <SectionTitle
            label={label}
            center={'left'}
            variant={'contactTitle'}
            className="w-[298px] md:w-[449px] text-main md:text-[30px] md:font-semibold md:leading-[1.2] tracking-[-0.4px] md:tracking-[-0.6px] xl:w-[512px] mb-[30px] md:mb-[50px] xl:mb-[40px] "
          />
          <Form />
        </div>
      </Container>
    </Section>
  );
};
