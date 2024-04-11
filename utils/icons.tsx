import PlantIcon from '@/public/icons/plant-icon.svg';
import PercentageIcon from '@/public/icons/percentage-icon.svg';
import SupportIcon from '@/public/icons/support-icon.svg';

export const icons = [
  {
    component: <PlantIcon />,
    text: 'Великий асортимент рослин',
    width: '95px',
    height: '95px',
    isFirstCard: true,
    isMiddleCard: false,
    isLastCard: false,
    id: 1,
  },
  {
    component: <PercentageIcon />,
    text: 'Знижки при купівлі декількох вазонів',
    width: '97px',
    height: '95px',
    isFirstCard: false,
    isMiddleCard: true,
    isLastCard: false,
    id: 2,
  },
  {
    component: <SupportIcon />,
    text: 'Консультативна підтримка після продажу',
    width: '95px',
    height: '95px',
    isFirstCard: false,
    isMiddleCard: false,
    isLastCard: true,
    id: 3,
  },
];
