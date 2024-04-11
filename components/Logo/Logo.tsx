import Link from 'next/link';
import classNames from 'classnames';
import LogoIcon from '@/public/icons/logo.svg';

type LogoProps = {
  isHeader: boolean;
  isFooter?: boolean;
};

export const Logo = ({ isHeader, isFooter }: LogoProps) => {
  const logoClassName = classNames(' stroke-current fill-current', {
    'w-[51px] h-[54px] xl:w-20 xl:h-20': isHeader,
    'w-[123px] h-[130px]': isFooter,
  });

  const LinkClassName = classNames(
    'cursor-pointer inline-block  hover:text-subtitle focus:text-subtitle transition',
    {
      'text-main': isHeader,
      'text-white': isFooter,
    },
  );

  return (
    <Link href="/" className={LinkClassName}>
      <LogoIcon
        className={logoClassName}
        strokeMiterlimit="10"
        strokeWidth="0.5"
      />
    </Link>
  );
};
