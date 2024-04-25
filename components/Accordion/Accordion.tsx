'use client';

import React, { useState } from 'react';

import { Dialogue } from '../Dialogue';

import accordion from '@/data/accordion.json';

export const Accordion: React.FC = () => {
  const [activeDialogue, setActiveDialogue] = useState<number>(0);

  const handleDialogue = (index: number): void => {
    setActiveDialogue(index);
  };
  return (
    <ul className="w-full xl:w-[875px] flex flex-col gap-4 xl:mx-auto">
      {accordion.map((item, index) => (
        <Dialogue
          key={index}
          text={item}
          activeDialogue={index === activeDialogue}
          handleDialogue={() => handleDialogue(index)}
        />
      ))}
    </ul>
  );
};
