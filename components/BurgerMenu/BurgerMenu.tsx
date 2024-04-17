'use client';

import React from 'react';

import { Modal } from '@/components/Modal';
import { Logo } from '../Logo';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

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
      closeBtnStyles="top-[15px] right-[20px]"
      ariaLabel={ariaLMenuMobileClose}
      modalStyles="w-full bg-bgMain h-[640px] md:h-[610px] pt-[15px] z-50"
    >
      <Container>
        <Logo isHeader onClick={onBurgerMenuClose} />
        <Navbar onClickCloseModal={onBurgerMenuClose} className="mt-[65px]" />
        <Button
          isLink
          isHeaderLink
          isDisabled={false}
          onClick={onBurgerMenuClose}
          className="mt-[100px]"
        >
          {labelLink}
        </Button>
      </Container>
    </Modal>
  );
};
