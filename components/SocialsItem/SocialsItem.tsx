import Link from 'next/link';

import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';

type SocialsItemProps = {
  name: 'facebook' | 'instagram';
  href: string;
  ariaL: string;
};

export const SocialsItem = ({ name, href, ariaL }: SocialsItemProps) => {
  return (
    <li key={name}>
      <Link
        href={href}
        aria-label={ariaL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex text-bgMain hover:text-bgSecond focus:text-bgSecond active:text-activeLink transition"
      >
        {name === 'facebook' && (
          <FacebookIcon width={40} height={40} className="fill-current" />
        )}
        {name === 'instagram' && (
          <InstagramIcon width={40} height={40} className="fill-current" />
        )}
      </Link>
    </li>
  );
};
