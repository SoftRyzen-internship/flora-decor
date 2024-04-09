import { ReactNode } from 'react';

export type SectionProps = {
  children: ReactNode;
  sectionId?: string;
  className?: string;
  isHeroSection?: boolean;
  isFlowerPotsSection?: boolean;
  isAboutOrContactSection?: boolean;
  isOtherSection?: boolean;
};
