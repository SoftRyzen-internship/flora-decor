'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import classNames from 'classnames';

import ChevronLeft from '@/public/icons/chevron-left.svg';

import common from '@/data/common.json';

type ButtonProps = {
  children: ReactNode;
  isDisabled: boolean;
  className?: string;
  onClick?: () => void;
  isHeaderLink?: boolean;
  isOrderLink?: boolean;
  isBtn?: boolean;
  isLink?: boolean;
  type?: 'button' | 'submit';
};

export const Button = ({
  isLink,
  children,
  isDisabled,
  className,
  onClick,
  isHeaderLink,
  isOrderLink,
  isBtn,
  type,
}: ButtonProps) => {
  const pathname = usePathname();
  const { pathToFeedback } = common;

  const stylesClassName = classNames(
    className,
    'uppercase rounded-[100px] transition-all duration-300',
    {
      'font-mulish text-heroButton text-center text-main bg-bgSecond inline-block w-full md:w-[320px] xl:w-[240px]  py-4 px-[30px]  hover:bg-btnSecondHover focus:bg-btnSecondHover active:bg-btnSecondActive ':
        isHeaderLink,
      'custom-button bg-button order-link hover:bg-btnHover focus:bg-btnHover active:bg-btnHover':
        isOrderLink || (isBtn && !isDisabled),
      'custom-button bg-disabledBtn order-link-disabled': isDisabled,
    },
  );

  if (isLink) {
    if (pathname === '/policy') {
      return (
        <Link href="/#contacts" onClick={onClick} className={stylesClassName}>
          {children}
        </Link>
      );
    }
    if (pathname === '/') {
      return (
        <ScrollLink
          href="/"
          to={pathToFeedback}
          className={stylesClassName}
          duration={500}
          onClick={onClick}
          smooth={true}
          spy={true}
          offset={0}
        >
          {children}
          {isOrderLink && (
            <ChevronLeft
              width={21}
              height={21}
              className="absolute top-[17px] right-[17px]"
            />
          )}
        </ScrollLink>
      );
    }
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={stylesClassName}
        disabled={isDisabled}
      >
        {children}
        <ChevronLeft
          width={21}
          height={21}
          className="absolute top-[17px] right-[17px]"
        />
      </button>
    );
  }
};
