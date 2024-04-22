'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

type FooterLinkHomePolicyProps = {
  policy: string;
  home: string;
};

export const FooterLinkHomePolicy: React.FC<FooterLinkHomePolicyProps> = ({
  policy,
  home,
}) => {
  const pathname = usePathname();

  return (
    <Link
      className="font-geologica text-footerColor text-subtitleMd not-italic transition hover:text-subtitle focus-visible:text-subtitle"
      href={pathname === '/' ? '/policy' : '/'}
    >
      {pathname === '/' ? policy : home}
    </Link>
  );
};
