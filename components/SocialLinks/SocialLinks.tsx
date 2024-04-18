import { SocialsItem } from '../SocialsItem';

import data from '@/data/common.json';

export const SocialLinks = () => {
  const { socials } = data;

  return (
    <ul className="flex gap-6 justify-center smOnly:mb-[90px] md:justify-start">
      {socials.map(item => (
        <SocialsItem
          key={item.name}
          name={item.name as 'facebook' | 'instagram'}
          href={item.path}
          ariaL={item.ariaLabel}
        />
      ))}
    </ul>
  );
};
