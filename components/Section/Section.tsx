import React, { ReactNode } from 'react';

import classNames from 'classnames';

type SectionProps = {
  children: ReactNode;
  variant:
    | 'heroSection'
    | 'flowerpotsSection'
    | 'aboutOrContactSection'
    | 'otherSection'
    | 'policySection';
  sectionId?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  sectionId,
  className = '',
  variant,
}) => {
  const classname = classNames(
    {
      'pt-[318px] pb-[60px] md:pt-[155px] md:pb-[155px] xl:pt-[231px] xl:pb-[231px]':
        variant === 'heroSection',
      'pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[150px] xl:pb-[150px]':
        variant === 'flowerpotsSection',
      'pb-[60px] md:pb-[70px]': variant === 'aboutOrContactSection',
      'pt-[60px] pb-[60px] md:pt-[70px] md:pb-[70px] xl:pt-[120px] xl:pb-[120px]':
        variant === 'otherSection',
      'pt-[124px] pb-[50px] md:pt-[144px] md:pb-[70px] xl:pt-[222px] xl:pb-[89px]':
        variant === 'policySection',
    },
    className,
  );
  return (
    <section className={classname} id={sectionId}>
      {children}
    </section>
  );
};
