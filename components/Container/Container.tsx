import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
