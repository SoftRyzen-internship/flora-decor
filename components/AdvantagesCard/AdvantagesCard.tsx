import classNames from 'classnames';

import PlantIcon from '@/public/icons/plant-icon.svg';
import PercentageIcon from '@/public/icons/percentage-icon.svg';
import SupportIcon from '@/public/icons/support-icon.svg';

type AdvantagesCardPropsType = {
  description: string;
  icon: string;
  isMiddleCard: boolean;
};

export const AdvantagesCard = ({
  icon,
  description,
  isMiddleCard,
}: AdvantagesCardPropsType) => {
  const stylesClassName = classNames('flex flex-col gap-[30px] items-center ', {
    'advantages-card relative': isMiddleCard,
  });

  return (
    <div className={stylesClassName}>
      {icon === 'plant' && (
        <PlantIcon width={95} height={95} className="md:mt-[20.5px] xl:mt-6" />
      )}
      {icon === 'percentage' && (
        <PercentageIcon
          width={95}
          height={95}
          className="md:mt-[20.5px] xl:mt-6"
        />
      )}
      {icon === 'support' && (
        <SupportIcon
          width={95}
          height={95}
          className="md:mt-[20.5px] xl:mt-6"
        />
      )}
      <p className="font-geologica tracking-normal text-subtitleMd text-subtitle w-[222px] md:w-[172px] xl:w-[319px] md:text-description xl:text-descriptionDesktop text-center">
        {description}
      </p>
    </div>
  );
};
