'use client';

import React from 'react';

import { Modal } from '@/components/Modal';
import { Logo } from '../Logo';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

import data from '@/data/layout.json';

type BurgerMenuProps = {
  isBurgerOpen: boolean;
  onBurgerMenuClose: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isBurgerOpen,
  onBurgerMenuClose,
}) => {
  const { ariaLMenuMobileClose, labelLink } = data;

  return (
    <Modal
      isBurgerMenu={true}
      closeModal={onBurgerMenuClose}
      isOpen={isBurgerOpen}
      closeBtnStyles="top-[13px] right-0"
      ariaLabel={ariaLMenuMobileClose}
      modalStyles="w-screen bg-bgMain mx-auto md:w-[360px] px-[20px] pt-[15px] z-50"
    >
      <Logo isHeader onClick={onBurgerMenuClose} />
      <Navbar onClickCloseModal={onBurgerMenuClose} className="mt-[65px]" />
      <div className="flex justify-center items-center mt-[100px]">
        <Button
          isLink
          isHeaderLink
          isDisabled={false}
          onClick={onBurgerMenuClose}
          className="max-w-[440px]"
        >
          {labelLink}
        </Button>
      </div>
    </Modal>
  );
};
