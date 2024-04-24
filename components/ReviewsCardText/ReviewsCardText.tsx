import { MutableRefObject } from 'react';
import classNames from 'classnames';

type TextType = {
  name: string;
  city: string;
  text: string;
  isCardText: boolean;
  textRef: MutableRefObject<HTMLDivElement | null>;
};

export const ReviewsCardText = ({
  name,
  city,
  text,
  isCardText,
  textRef,
}: TextType) => {
  const textClassName = classNames(
    'font-geologica text-subtitleMd leading-[1.3] text-main  md:text-descriptionDesktop tracking-normal ',
    {
      'mb-[16px] text-hidden h-[108px] md:h-[156px]': isCardText,
    },
  );
  return (
    <>
      <p className="pt-[59px] md:pt-[73px] font-geologica text-subtitleXs text-main mb-[28px] md:text-subtitleMd">
        {name}, {city}
      </p>
      <p className={textClassName} ref={textRef}>
        {text}
      </p>
    </>
  );
};
