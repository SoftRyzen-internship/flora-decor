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
      'w-[120px] h-[116px]': volume === '11',
      'w-[130px] h-[125px]': volume === '12',
      'w-[140px] h-[134px]': volume === '13',
      'w-[150px] h-[143px]': volume === '14',
      'w-[160px] h-[152px]': volume === '15',
      'w-[180px] h-[170px]': volume === '17',
      'w-[201px] h-[188px]': volume === '19',
      'w-[240px] h-[224px]': volume === '23',
    },
  );

  return (
    <li className={stylesName}>
      <PotTopIcon width={'100%'} />
      <div className="w-[81.67%] h-[69%] relative">
        <PotBottomIcon width={'100%'} height={'100%'} />
        <span className="inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-bgSecond font-geologica text-descriptionDesktop">
          {volume}
        </span>
      </div>
    </li>
  );
};
