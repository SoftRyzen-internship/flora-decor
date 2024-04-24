import { MutableRefObject } from 'react';
import classNames from 'classnames';

type TextType = {
  name: string;
  city: string;
  text: string;
  isCardText?: boolean;
  textRef: MutableRefObject<HTMLDivElement | null>;
  isModalText?: boolean;
};

export const ReviewsCardText = ({
  name,
  city,
  text,
  isCardText,
  textRef,
  isModalText,
}: TextType) => {
  const textClassName = classNames(
    'font-geologica text-subtitleMd leading-[1.3] text-main  md:text-descriptionDesktop tracking-normal ',
    {
      'mb-[16px] text-hidden h-[107px] md:h-[156px]': isCardText,
      'overflow-y-auto max-h-[291px] md:max-h-[343px]': isModalText,
    },
  );
  return (
    <>
      <p className="pt-[59px] md:pt-[73px] font-geologica text-subtitleXs text-main mb-[28px] md:text-subtitleMd ">
        {name}, {city}
      </p>
      <p className={textClassName} ref={textRef}>
        {text}
      </p>
    </>
  );
};
