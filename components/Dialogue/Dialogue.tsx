import React from 'react';
import { IDialogue } from './types';
import PlusIcon from '@/public/icons/plus.svg';
import MinusIcon from '@/public/icons/minus.svg';

type DialogueProps = {
  text: IDialogue;
  activeDialogue: boolean;
  handleDialogue: () => void;
};
export const Dialogue: React.FC<DialogueProps> = ({
  text,
  activeDialogue,
  handleDialogue,
}) => {
  const { question, answer } = text;
  const handleKeyDown = (event: any) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleDialogue();
    }
  };
  return (
    <li
      onKeyDown={handleKeyDown}
      className="w-full bg-bgSecond cursor-pointer p-6 rounded-lg"
      onClick={handleDialogue}
      tabIndex={0}
    >
      <div className="flex flex-row justify-between items-center gap-[40px] md:gap-[56px] ">
        <div className="w-full">
          <p className="text-[16px] leading-[1.3] font-medium md:tracking-[-0.4px] xl:tracking-normal md:font-semibold font-geologica text-main md:text-[20px] md:leading-[1.2] xl:text-descriptionDesktop ">
            {question}
          </p>
        </div>
        {activeDialogue ? (
          <MinusIcon width={22} height={22} className="fill-current" />
        ) : (
          <PlusIcon width={22} height={22} className="fill-current" />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out grid ${activeDialogue ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden w-[75%]  md:w-[500px] xl:w-[750px]">
          <p className="text-subtitleXs text-description xl:text-subtitleMd mt-[10px] ">
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
};
