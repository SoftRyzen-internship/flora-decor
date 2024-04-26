import Image from 'next/image';
import React from 'react';

type GalleryImgItemProps = {
  img: any;
  alt: string;
  width: number;
  height: number;
};

export const GalleryImgItem: React.FC<GalleryImgItemProps> = ({
  img,
  alt,
  width,
  height,
}) => {
  return (
    <li className="object-cover aspect-ratio overflow-hidden md:w-[330px]">
      <Image
        src={img}
        width={width}
        height={height}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </li>
  );
};
