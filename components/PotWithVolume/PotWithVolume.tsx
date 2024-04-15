'use client';

import classNames from 'classnames';

import PotTopIcon from '@/public/icons/pot-top.svg';
import PotBottomIcon from '@/public/icons/pot-bottom.svg';

export type PotPropsType = {
  volume: string;
};

export const PotWithVolume = ({ volume }: PotPropsType) => {
  const stylesName = classNames(
    'flex flex-col  items-center justify-between relative',
    {
      'w-[100px] h-[95px] md:w-[120px] md:h-[114px] ': volume === '11',
      'w-[112px] md:w-[130px] h-[106px] md:h-[123px] ': volume === '12',
      'w-[125px] md:w-[150px] h-[118px] md:h-[142px]': volume === '14',
      'w-[133px] md:w-[160px] h-[126px] md:h-[152px]': volume === '15',
      'w-[150px] md:w-[180px] h-[143px] md:h-[172px]': volume === '17',
      'w-[166px] md:w-[200px] h-[158px] md:h-[190px]': volume === '19',
    },
  );

  return (
    <li className={stylesName}>
      <PotTopIcon width={'100%'} />
      <PotBottomIcon width={'81.62%'} />
      <p className="absolute top-1/2 bottom-1/2 translate-[-50%, -50%] text-bgSecond font-geologica text-descriptionDesktop">
        {volume}
      </p>
    </li>
  );
};
