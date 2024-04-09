import Link from 'next/link';
import classNames from 'classnames';
import LogoIcon from '@/public/icons/logo.svg';

type LogoProps = {
  isHeader?: boolean;
  isFooter?: boolean;
  onClick?: () => void;
};

export const Logo = ({ isHeader, isFooter, onClick }: LogoProps) => {
  const logoClassName = classNames(' stroke-current fill-current', {
    'w-[51px] h-[54px] xl:w-20 xl:h-20': isHeader,
    'w-[123px] h-[130px]': isFooter,
  });

  const LinkClassName = classNames(
    'cursor-pointer inline-block  hover:text-[#508050] focus:text-[#508050] transition-all duration-300',
    {
      'text-[#224722]': isHeader,
      'text-white': isFooter,
    },
  );

  return (
    <div className="">
      <Link href="/" className={LinkClassName} onClick={onClick}>
        <LogoIcon
          className={logoClassName}
          strokeMiterlimit="10"
          strokeWidth="0.5"
        />
      </Link>
    </div>
  );
};
