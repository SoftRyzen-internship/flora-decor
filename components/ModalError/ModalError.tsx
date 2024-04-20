import React from 'react';

import { Modal } from '@/components/Modal';

import IconError from '@/public/icons/fail-icon.svg';

import data from '@/data/common.json';

type ModalErrorProps = {
  closeModal: () => void;
  isOpen: boolean;
};

export const ModalError: React.FC<ModalErrorProps> = ({
  closeModal,
  isOpen,
}) => {
  const { modalError } = data;

  return (
    <Modal
      isOpen={isOpen}
      isPopUp={true}
      closeModal={closeModal}
      closeBtnStyles="top-[-105px] right-[-8px] md:right-[-70px] md:top-[-85px] xl:right-[-159px]"
      ariaLabel=""
      modalStyles="w-[328px] h-[438px] bg-bgMain rounded-[10px] text-center px-[35px] py-[132px] md:w-[624px] md:px-[97px] md:py-[112px] xl:w-[802px] xl:px-[186px] xl:pb-[100px]"
    >
      <IconError className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] ml-auto mr-auto mb-6" />
      <h3 className="mb-4 font-geologica not-italic text-error text-xl leading-[1.2] font-semibold tracking-[-0.4px] md:text-titleAboutMd xl:text-titleContactXl">
        {modalError.title}
      </h3>
      <p className="font-geologica not-italic text-subtitleXs text-main flex flex-col">
        {modalError.description.first}
        <span>{modalError.description.second}</span>
      </p>
    </Modal>
  );
};
