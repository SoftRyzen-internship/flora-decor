import Image from 'next/image';
import React from 'react';

type GalleryImgItemProps = {
  img: any;
  alt: string;
};

export const GalleryImgItem: React.FC<GalleryImgItemProps> = ({ img, alt }) => {
  return (
    <li className="object-cover aspect-ratio overflow-hidden md:w-[330px]">
      <Image src={img} width={652} height={615} priority alt={alt} />
    </li>
  );
};
