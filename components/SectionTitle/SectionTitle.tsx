import React from 'react';

import classNames from 'classnames';

import { SectionTitleProps } from './type';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  className,
  center,
  variant,
}) => {
  const stylesSectionTitle = classNames(
    'not-italic text-main',
    {
      'text-titleSm': variant === 'otherTitle',
      'text-left': center === 'left',
      'text-center': center === 'center',
      'text-titleContactSm': variant === 'contactTitle',
    },
    className,
  );

  return <h2 className={stylesSectionTitle}>{label}</h2>;
};
