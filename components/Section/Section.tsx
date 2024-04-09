import React from 'react';

import classNames from 'classnames';

import { SectionProps } from './type';

export const Section: React.FC<SectionProps> = ({
  children,
  sectionId,
  className,
  isHeroSection,
  isFlowerPotsSection,
  isAboutOrContactSection,
  isOtherSection,
}) => {
  const classname = classNames(
    {
      'pt-[244px] pb-[60px] md:pt-[81px] md:pb-[155px] xl:pt-[231px] xl:pb-[231px]':
        isHeroSection,
      'pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[150px] xl:pb-[150px]':
        isFlowerPotsSection,
      'pb-[60px] md:pb-[70px]': isAboutOrContactSection,
      'pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[120px] xl:pb-[120px]':
        isOtherSection,
    },
    className,
  );
  return (
    <section className={classname} id={sectionId}>
      {children}
    </section>
  );
};
