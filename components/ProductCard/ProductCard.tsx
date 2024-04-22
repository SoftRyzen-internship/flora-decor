import Image from 'next/image';

import React from 'react';

type ProductCardProps = {
  product: string;
  image: string;
  volumes: string[];
  price: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  image,
  volumes,
  price,
}) => {
  return (
    <li className="bg-transparent w-full sm:w-[480px] md:w-[320px] xl:w-[430px] mb-[30px] xl:mb-[21px] ">
      <div className="flex justify-center mb-5 items-center rounded-xl bg-white object-cover aspect-ratio overflow-hidden w-full md:w-[320px] xl:w-[430px] xl:h-[500px]  ">
        <Image
          width={440}
          height={495}
          alt={product}
          src={image}
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full gap-[10px] xl:flex-row-reverse xl:justify-between mb-[10px]">
          <ul className="flex flex-row gap-[7px]">
            {volumes.map((volume, index) => {
              return (
                <div
                  key={index}
                  className="w-[39px] h-[24px] rounded-xl bg-transparent border border-main flex justify-center items-center"
                >
                  <span className="text-[14px] leading-[1.4] tracking-[-0.28px] text-main  font-geologica">
                    {volume}
                  </span>
                </div>
              );
            })}
          </ul>
          <h3 className="font-geologica text-[20px] leading-[1.2] tracking-[-0.4px] font-semibold  xl:text-descriptionDesktop text-main capitalize">
            {product}
          </h3>
        </div>
        <p className="font-geologica text-[14px] leading-[1.4] tracking-[-0.28px] xl:text-subtitleMd text-main ">
          від <span>{price} </span>грн
        </p>
      </div>
    </li>
  );
};
