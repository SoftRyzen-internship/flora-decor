import React from 'react';

import classNames from 'classnames';

import { NavbarLink } from '@/components/NavbarLink';

import data from '@/data/layout.json';

type NavbarProps = {
  onClickCloseModal?: () => void;
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({
  onClickCloseModal,
  className = '',
}) => {
  const { navlinks } = data;

  const stylesNavbar = classNames(
    className,
    'flex flex-col items-center gap-5 xl:flex-row xl:gap-10',
  );
  return (
    <ul className={stylesNavbar}>
      {navlinks.map((item, index) => (
        <NavbarLink
          key={index}
          path={item.path}
          title={item.title}
          onClickCloseModal={onClickCloseModal}
        />
      ))}
    </ul>
  );
};
