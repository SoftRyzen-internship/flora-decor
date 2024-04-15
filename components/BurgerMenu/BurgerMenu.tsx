'use client';

import React from 'react';

import { Modal } from '@/components/Modal';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

type BurgerMenuProps = {
  isBurgerOpen: boolean;
  onBurgerMenuClose: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isBurgerOpen,
  onBurgerMenuClose,
}) => {
  return (
    <Modal
      isBurgerMenu={true}
      closeModal={onBurgerMenuClose}
      isOpen={isBurgerOpen}
      closeBtnStyles=""
      ariaLabel=""
      modalStyles="text-center w-full bg-bgMain h-[640px] md:h-[610px]"
    >
      <Navbar onClickCloseModal={onBurgerMenuClose} />
      <Button
        isLink
        isHeaderLink
        isDisabled={false}
        onClick={onBurgerMenuClose}
        className="mt-[100px]"
      >
        Залишити заявку
      </Button>
    </Modal>
  );
};
