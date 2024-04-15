'use client';

import classNames from 'classnames';

import PotTopIcon from '@/public/icons/pot-top.svg';
import PotBottomIcon from '@/public/icons/pot-bottom.svg';

export type PotPropsType = {
  volume: string;
  //   width: string;
  //   bottomWidth: string;
  //   height: string;
};

export const PotWithVolume = ({ volume }: PotPropsType) => {
  const stylesName = classNames(
    'flex flex-col gap-[4px] items-center relative',
    {
      'w-[120px] h-[114px]': volume === '11',
      'w-[130px] h-[123px]': volume === '12',
    },
  );

  const stylesBottomName = classNames({
    'w-[98px]': volume === '11',
    'w-[106px]': volume === '12',
  });
  //   const potStyles = `w-[${width}] h-[${height}]  flex flex-col gap-[5px] items-center relative`;
  //   const bottomStyles = `w-[${bottomWidth}]`;

  //    'w-[120px] h-[114px]  flex flex-col gap-[5px] items-center relative';
  return (
    <li className={stylesName}>
      <PotTopIcon />
      <div className={stylesBottomName}>
        <PotBottomIcon />
      </div>
      <p className="absolute top-1/2 bottom-1/2 translate-[-50%, -50%] text-bgSecond font-geologica text-descriptionDesktop">
        {volume}
      </p>
    </li>
  );
};
//  {
//       "volume": "14",
//       "width": "150px",
//       "bottomWidth": "122px",
//       "height": "142px"
//     }
