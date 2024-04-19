import React from 'react';

import classNames from 'classnames';

type SectionTitleProps = {
  label: string;
  className?: string;
  center: 'left' | 'center';
  variant: 'contactTitle' | 'otherTitle';
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  className = '',
  center,
  variant,
}) => {
  const stylesSectionTitle = classNames(
    'font-geologica not-italic text-main font-semibold',
    {
      'text-titleSm md:text-titleMd xl:text-6xl xl:leading-[1.1]':
        variant === 'otherTitle',
      'text-left': center === 'left',
      'text-center': center === 'center',
      'text-xl tracking-[-0.4px] leading-6 md:text-text-3xl md:tracking-[-0.6px] xl:text-titleContactXl':
        variant === 'contactTitle',
    },
    className,
  );

  return <h2 className={stylesSectionTitle}>{label}</h2>;
};
