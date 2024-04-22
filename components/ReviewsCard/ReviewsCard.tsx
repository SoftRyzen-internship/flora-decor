'use client';
import React, { useEffect, useState, useRef } from 'react';

type ReviewCardProps = {
  name: string;
  city: string;
  text: string;
};

export const ReviewsCard = ({ name, city, text }: ReviewCardProps) => {
  const [isReadMoreBtnVisible, setIsReadMoreBtnVisible] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;

    const heightControl = () => {
      if (textElement) {
        const showBtn = textElement.scrollHeight > textElement.clientHeight;

        setIsReadMoreBtnVisible(showBtn);
      }
    };
    heightControl();

    window.addEventListener('resize', heightControl);

    return () => {
      window.removeEventListener('resize', heightControl);
    };
  }, [text]);

  return (
    <div className="flex flex-col w-full h-[332px] md:h-[462px] bg-white rounded-tl-[50px] rounded-br-[50px]  md:rounded-tl-[150px] md:rounded-br-[150px] py-[37px] px-[26px] xl:w-[734px] xl:h-[520px] reviews-card relative md:py-[70px] md:px-[80px]">
      <p className="pt-[59px] md:pt-[73px] font-geologica text-subtitleXs text-main mb-[28px] md:text-subtitleMd">
        {name}, {city}
      </p>
      <p
        className="font-geologica text-subtitleMd leading-[1.3] text-main mb-[16px] md:text-descriptionDesktop tracking-normal text-hidden h-[108px] md:h-[156px]"
        ref={textRef}
      >
        {text}
      </p>

      {isReadMoreBtnVisible && (
        <button className="font-mulish text-descriptionFontSize leading-[1.5] text-buttonIcon block ml-auto md:text-descriptionFontSize font-normal md:font-normal hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 transition">
          Читати більше
        </button>
      )}
    </div>
  );
};
