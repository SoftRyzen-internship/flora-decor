import React from 'react';
import classNames from 'classnames';

import { ContainerProps } from './type';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
