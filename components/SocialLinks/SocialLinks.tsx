import Link from 'next/link';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';

import common from '@/data/common.json';

export const SocialLinks = () => {
  const { facebookAriaText, instagramAriaText, facebookLink, instagramLink } =
    common;

  return (
    <ul className="flex gap-6">
      <li>
        <Link
          href={facebookLink}
          aria-label={facebookAriaText}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex text-bgMain hover:text-bgSecond focus:text-bgSecond active:text-[#D5DDC9] transition"
        >
          <FacebookIcon width={40} height={40} className="fill-current" />
        </Link>
      </li>
      <li>
        <Link
          href={instagramLink}
          aria-label={instagramAriaText}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex text-bgMain hover:text-bgSecond focus:text-bgSecond active:text-[#D5DDC9] transition"
        >
          <InstagramIcon width={40} height={40} className="fill-current" />
        </Link>
      </li>
    </ul>
  );
};
