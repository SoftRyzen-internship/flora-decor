import React from 'react';

import { Modal } from '@/components/Modal';
import { Navbar } from '@/components/Navbar';

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
      modalStyles=""
    >
      <Navbar />
    </Modal>
  );
};
