'use client';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Modal } from '@/components/Modal/Modal';

import React, { useState } from 'react';

export const ExampleModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <Section sectionId="hero" className="bg-bgSecond" variant="heroSection">
      <Container>
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
      </Container>
    </Section>
  );
};
