import React from 'react';

import { NavbarLink } from '@/components/NavbarLink';

import data from '@/data/layout.json';

type NavbarProps = {
  onClickCloseModal?: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onClickCloseModal }) => {
  const { navlinks } = data;
  return (
    <ul className="flex flex-col items-center gap-5 xl:flex-row xl:gap-10">
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
