import React from 'react';

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
    <li key={name} className="footer-item transition">
      <a
        href={href}
        aria-label={ariaLabel}
        className="text-bgSecond font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] hover:text-subtitle focus:text-subtitle transition flex items-center gap-[15px]"
      >
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
