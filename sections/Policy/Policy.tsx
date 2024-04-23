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
          className="xl:w-[986px] xl:mr-[111px] xl:ml-auto 
          
          prose-h1:font-geologica prose-h1:mb-[64px] prose-h1:text-[20px] prose-h1:font-semibold
          prose-h1:text-main prose-h1:leading-[1.2] prose-h1:tracking-[-0.4px] prose-h1:uppercase
          md:prose-h1:text-titleAboutMd xl:prose-h1:text-titleContactXl

         prose-h2:mt-[60px] prose-h2:text-descriptionDesktop prose-h2:font-geologica prose-h2:font-medium
          prose-h2:text-main prose-h2:mb-7 xl:prose-h2:text-titleContactXl xl:prose-h2:text-main

         prose-h3:mt-[60px] prose-h3:text-descriptionDesktop prose-h3:font-geologica prose-h3:font-medium
          prose-h3:text-main prose-h3:mb-7
          
          prose-p:text-description 
          prose-p:font-geologica prose-p:text-subtitleXs prose-p:mb-6 prose-p:mt-0 xl:prose-p:text-subtitleMd 
            prose-ul:m-0 prose-ul:list-disc prose-ul:list-inside prose-ul:text-description
            prose-li:m-0  prose-li:text-subtitleXs prose-li:font-geologica xl:prose-li:text-subtitleMd 
             prose-li:marker:text-description prose-a:font-geologica xl:pros-li:text-subtitleMd
              prose-a:text-red-500 prose-a:text-subtitleXs xl:prose-a:text-subtitleMd"
        >
          <PortableText value={data} components={CustomComponents} />
        </div>
      </Container>
    </Section>
  );
};
