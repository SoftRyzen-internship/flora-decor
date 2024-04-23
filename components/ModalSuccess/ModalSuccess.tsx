import React from 'react';

import { Modal } from '@/components/Modal';

import IconSuccess from '@/public/icons/success.svg';

import data from '@/data/common.json';

type ModalSuccessProps = {
  closeModal: () => void;
  isOpen: boolean;
};

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isOpen,
  closeModal,
}) => {
  const { modalSuccess } = data;

  return (
    <Modal
      isOpen={isOpen}
      isPopUp={true}
      closeModal={closeModal}
      closeBtnStyles="top-[-93px] right-0 md:right-[-68px] md:top-[-81px] xl:right-[-149px] xl:top-[-85px]"
      ariaLabel=""
      modalStyles="w-[328px] h-[438px] bg-bgMain rounded-[10px] text-center px-[30px] py-[120px] md:w-[624px] md:px-[95px] md:py-[108px] xl:w-[802px] xl:px-[116px] xl:pb-[80px] xl:pt-[112px]"
    >
      <IconSuccess className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] ml-auto mr-auto mb-6" />
      <h3 className="mb-4 font-geologica not-italic text-main text-xl leading-[1.2] font-semibold tracking-[-0.4px] md:text-titleAboutMd xl:text-titleContactXl">
        {modalSuccess.title}
      </h3>
      <p className="font-geologica not-italic text-subtitleXs text-main">
        {modalSuccess.description}
      </p>
    </Modal>
  );
};
