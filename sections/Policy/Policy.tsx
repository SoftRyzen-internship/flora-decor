import React from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import { CustomComponents } from '@/components/CustomComponents/CustomComponents';

type PolicyProps = {
  data: PortableTextBlock[];
};

export const Policy: React.FC<PolicyProps> = ({ data }) => {
  return (
    <Section variant="policySection">
      <Container>
        <div
          className="xl:w-[986px] xl:mr-[111px] xl:ml-auto prose max-w-none
          [&>p:nth-child(5)]:mb-5  [&>p:nth-child(19)]:mb-0
          prose-h1:font-geologica prose-h1:mb-[64px] prose-h1:text-[20px] prose-h1:font-semibold
          prose-h1:text-main prose-h1:leading-[1.2] prose-h1:tracking-[-0.4px] prose-h1:uppercase
          md:prose-h1:text-titleAboutMd xl:prose-h1:text-titleContactXl

         prose-h2:mt-[60px] prose-h2:text-descriptionDesktop prose-h2:font-geologica prose-h2:font-medium
          prose-h2:text-main prose-h2:mb-7 xl:prose-h2:text-titleContactXl xl:prose-h2:text-main

         prose-h3:mt-[60px] prose-h3:text-descriptionDesktop prose-h3:font-geologica prose-h3:font-medium
          prose-h3:text-main prose-h3:mb-7
          
          prose-p:text-description 
          prose-p:font-geologica prose-p:text-subtitleXs prose-p:mb-6 md:prose-p:mb-6
            prose-ul:m-0
            prose-li:m-0 prose-ul:text-description prose-li:text-sm
             prose-li:marker:text-description prose-a:font-geologica
              prose-a:text-description prose-a:text-sm 
                 xl:prose-p:text-subtitleMd  "
        >
          <PortableText value={data} components={CustomComponents} />
        </div>
      </Container>
    </Section>
  );
};
