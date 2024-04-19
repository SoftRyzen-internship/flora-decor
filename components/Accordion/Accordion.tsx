import React, { useState } from 'react';

import { Dialogue } from '../Dialogue';

import accordion from '@/data/accordion.json';

export const Accordion: React.FC = () => {
  const [activeDialogue, setActiveDialogue] = useState<number>(0);

  const handleDialogue = (index: number): void => {
    setActiveDialogue(index);
  };
  return (
    <ul className="w-full xl:w-[875px]">
      {accordion.map((item, index) => (
        <li key={index}>
          <Dialogue
            text={item}
            activeDialogue={index === activeDialogue}
            handleDialogue={() => handleDialogue(index)}
          />
        </li>
      ))}
    </ul>
  );
};
