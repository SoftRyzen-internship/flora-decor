import React from 'react';

import IconGoIt from '@/public/icons/goIT.svg';
import IconSoftRyzen from '@/public/icons/softryzen.svg';

type FooterLinksProps = {
  name: string;
  path: string;
  ariaLabel: string;
};

export const FooterLinks: React.FC<FooterLinksProps> = ({
  name,
  path,
  ariaLabel,
}) => {
  return (
    <li>
      <a
        href={path}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-footerSecond transition hover:text-subtitle focus-visible:text-subtitle"
      >
        {name === 'goit' && (
          <IconGoIt className="w-[50px] h-[15px] md:w-[81px] md:h-6 xl:w-[67px] xl:h-[19px]" />
        )}
        {name === 'softryzen' && (
          <IconSoftRyzen className="w-[100px] h-[15px] md:w-[161px] md:h-6 xl:w-[134px] xl:h-[19px]" />
        )}
      </a>
    </li>
  );
};
