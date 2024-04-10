'use client';
import { SectionTitle } from '@/components';

import { Logo } from '@/components/Logo';
import { Modal } from '@/components/Modal/Modal';
export const EXAMPLE = () => {
  return (
    <section>
      <Logo isHeader />
      <SectionTitle
        label="Section Title"
        center="center"
        variant="otherTitle"
      />
      <SectionTitle
        label="Section Title for contacts"
        center="left"
        variant="contactTitle"
      />
      <Modal
        isOpen={true}
        ariaLabel="закрити"
        closeBtnStyles=""
        modalStyles={'w-[300px] border-black border-[1px] h-[200px] bg-white'}
        isBurgerMenu={false}
        isPopUp
      >
        <p>Modal</p>
      </Modal>
    </section>
  );
};
