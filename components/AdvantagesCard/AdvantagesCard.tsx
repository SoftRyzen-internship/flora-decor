import React from 'react';

type AdvantagesCardPropsType = {
  description: string;
  icon: React.ReactElement;
};

export const AdvantagesCard = ({
  icon,
  description,
}: AdvantagesCardPropsType) => {
  return (
    <li className="flex flex-col gap-[30px] items-center md:w-[calc(100%_/_3)] advantages-card relative">
      {icon}
      <p className="font-geologica tracking-normal text-subtitleMd text-subtitle w-[222px] md:w-[172px] xl:w-[319px] md:text-description xl:text-descriptionDesktop text-center">
        {description}
      </p>
    </li>
  );
};
