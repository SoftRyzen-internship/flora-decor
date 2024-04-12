import React from 'react';

import classNames from 'classnames';

type AdvantagesCardPropsType = {
  description: string;
  icon: React.ReactElement;
  iconWidth: string;
  iconHeight: string;
  isFirstCard: boolean;
  isMiddleCard: boolean;
  isLastCard: boolean;
};

export const AdvantagesCard = ({
  icon,
  description,
  iconWidth,
  iconHeight,
  isFirstCard,
  isMiddleCard,
  isLastCard,
}: AdvantagesCardPropsType) => {
  const stylesClassName = classNames('flex flex-col gap-[30px] items-center ', {
    'pb-[35px] md:pb-0 md:pr-[41px] xl:pr-[61px]': isFirstCard,
    'pt-[35px] md:pt-0 md:pl-[41px] xl:pl-[61px]': isLastCard,
    'pb-[35px] pt-[35px] md:pb-0 md:pt-0 md:px-[41px] xl:px-[61px] border-y-[0.5px] border-[#8EA58E] md:border-y-0 md:border-x-[0.5px]':
      isMiddleCard,
  });

  return (
    <div className={stylesClassName}>
      {React.cloneElement(icon, {
        style: {
          width: iconWidth,
          height: iconHeight,
        },
      })}
      <p className="font-geologica tracking-normal text-subtitleMd text-subtitle w-[222px] md:w-[172px] xl:w-[319px] md:text-description xl:text-descriptionDesktop text-center">
        {description}
      </p>
    </div>
  );
};
