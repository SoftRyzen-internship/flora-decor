'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import classNames from 'classnames';

type NavbarLinkProps = {
  path: string;
  title: string;
  onClickCloseModal?: () => void;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  path,
  title,
  onClickCloseModal,
}) => {
  const pathname = usePathname();

  const stylesLink = classNames(
    'cursor-pointer text-xl xl:text-subtitleMd leading-6 not-italic font-semibold font-geologica tracking-[-0.4px] text-main hover:text-buttonIcon focus:text-buttonIcon transition',
  );

  return (
    <li>
      {pathname === '/policy' ? (
        <Link
          href={`/#${path}`}
          onClick={onClickCloseModal}
          className={stylesLink}
        >
          {title}
        </Link>
      ) : (
        <ScrollLink
          to={path}
          smooth={true}
          href="/"
          offset={-73}
          spy={true}
          duration={500}
          onClick={onClickCloseModal}
          className={stylesLink}
        >
          {title}
        </ScrollLink>
      )}
    </li>
  );
};
