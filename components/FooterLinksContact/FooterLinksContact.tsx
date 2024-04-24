import React from 'react';

import IconLocation from '@/public/icons/location.svg';
import IconMail from '@/public/icons/mail.svg';
import IconTel from '@/public/icons/phone.svg';

type FooterLinksContactProps = {
  name: string;
  href: string;
  ariaLabel: string;
  label: string;
};

export const FooterLinksContact: React.FC<FooterLinksContactProps> = ({
  name,
  href,
  ariaLabel,
  label,
}) => {
  return (
    <li className="footer-item transition">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href={href}
        aria-label={ariaLabel}
        className="text-bgSecond font-geologica whitespace-pre-wrap text-start text-subtitleXs not-italic md:text-subtitleMd hover:text-subtitle focus:text-subtitle transition flex items-center gap-[15px]"
      >
        {name === 'location' && (
          <div className="w-10 h-10 bg-bgMain flex footer-icon justify-center items-center rounded-full">
            <IconLocation width={24} height={24} />
          </div>
        )}
        {name === 'phone' && (
          <div className="w-10 h-10 bg-bgMain footer-icon flex justify-center items-center rounded-full">
            <IconTel width={24} height={24} />
          </div>
        )}
        {name === 'mail' && (
          <div className="w-10 h-10 bg-bgMain footer-icon flex justify-center items-center rounded-full">
            <IconMail width={24} height={24} />
          </div>
        )}
        {label}
      </a>
    </li>
  );
};
