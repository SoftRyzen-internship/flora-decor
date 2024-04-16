'use client';

import classNames from 'classnames';

import PotTopIcon from '@/public/icons/pot-top.svg';
import PotBottomIcon from '@/public/icons/pot-bottom.svg';

export type PotPropsType = {
  volume: string;
};

export const PotWithVolume = ({ volume }: PotPropsType) => {
  const stylesName = classNames(
    'flex flex-col  items-center justify-between ',
    {
      'w-[100px] h-[95px] md:w-[120px] md:h-[115px] ': volume === '11',
      'w-[112px] md:w-[130px] h-[106px] md:h-[123px] ': volume === '12',
      'w-[115px] md:w-[138px] h-[115px] md:h-[138px] ': volume === '13',
      'w-[125px] md:w-[150px] h-[118px] md:h-[142px]': volume === '14',
      'w-[133px] md:w-[160px] h-[126px] md:h-[152px]': volume === '15',
      'w-[150px] md:w-[180px] h-[143px] md:h-[172px]': volume === '17',
      'w-[166px] md:w-[200px] h-[158px] md:h-[190px]': volume === '19',
      'w-[180px] md:w-[217px] h-[167px] md:h-[200px]': volume === '23',
    },
  );

  return (
    <li className={stylesName}>
      <PotTopIcon width={'100%'} />
      <div className="w-[81.67%] h-[67.83%] relative">
        <PotBottomIcon />
        <span className="inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-bgSecond font-geologica text-descriptionDesktop">
          {volume}
        </span>
      </div>
    </li>
  );
};
