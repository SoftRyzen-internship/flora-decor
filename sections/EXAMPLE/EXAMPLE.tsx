import { SectionTitle } from '@/components';

import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';
export const EXAMPLE = () => {
  return (
    <section>
      <Logo isHeader />
      <SectionTitle
        label="Section Title"
        center="center"
        variant="otherTitle"
      />
      <SectionTitle
        label="Section Title for contacts"
        center="left"
        variant="contactTitle"
      />
      <div className="bg-[#224722]">
        <SocialLinks />
      </div>
    </section>
  );
};
