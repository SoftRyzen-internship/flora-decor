import React from 'react';

import IconUkr from '@/public/icons/ukrposhta.svg';
import IconNova from '@/public/icons/nova_poshta.svg';

type FooterDeliveryListProps = {
  name: string;
};

export const FooterDeliveryList: React.FC<FooterDeliveryListProps> = ({
  name,
}) => {
  return (
    <li key={name}>
      {name === 'ukr' && <IconUkr width={133} height={36} />}
      {name === 'nova' && <IconNova width={100} height={36} />}
    </li>
  );
};
