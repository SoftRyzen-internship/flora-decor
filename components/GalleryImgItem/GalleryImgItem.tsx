import Image from 'next/image';
import React from 'react';

type GalleryImgItemProps = {
  img: any;
  alt: string;
};

export const GalleryImgItem: React.FC<GalleryImgItemProps> = ({ img, alt }) => {
  return (
    <li>
      <Image
        src={img}
        className="w-[440px] h-[220px] md:w-[330px]"
        priority
        alt={alt}
      />
    </li>
  );
};
