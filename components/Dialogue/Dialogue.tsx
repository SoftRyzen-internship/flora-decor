import React from 'react';
import { IDialogue } from './types';

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
  return (
    <div className="w-full bg-bgSecond" onClick={handleDialogue}>
      <div className="flex flex-row justify-between">
        <div className="">
          <p className="">{question}</p>
        </div>

        {/* <svg className={css.button_icon}>
          <use href={`${icons}#${showText ? 'icon-minus' : 'icon-Plus'}`} />
        </svg> */}
      </div>

      {activeDialogue && (
        <div className="">
          <p className="">{answer}</p>
        </div>
      )}
    </div>
  );
};
