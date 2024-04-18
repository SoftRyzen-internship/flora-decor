'use client';

import { useState } from 'react';

import { Modal } from '@/components/Modal';

export const ExampleModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="uppercase text-main text-base"
      >
        OPEN EXAMPLE MODAL
      </button>
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
        ariaLabel="закрити"
        closeBtnStyles="top-[30px] right-[30px]"
        modalStyles={'w-[300px] h-[200px] bg-white'}
        isBurgerMenu={false}
        isPopUp={true}
      >
        <p>Children</p>
      </Modal>
    </>
  );
};
