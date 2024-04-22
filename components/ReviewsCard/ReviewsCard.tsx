'use client';
import React, { useEffect, useState, useRef } from 'react';

import { Modal } from '@/components/Modal';
import { ReviewsCardText } from '@/components/ReviewsCardText';

import data from '@/data/reviews.json';

type ReviewCardProps = {
  name: string;
  city: string;
  text: string;
};

export const ReviewsCard = ({ name, city, text }: ReviewCardProps) => {
  const [isReadMoreBtnVisible, setIsReadMoreBtnVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const { modalBtnAria, readMoreBtnText } = data;

  const onReadMoreBtnClick = () => {
    setIsModalOpen(true);
  };

  const closeReviewsModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const textElement = textRef.current;

    const heightControl = () => {
      if (textElement) {
        const showBtn = textElement.scrollHeight > textElement.clientHeight;

        setIsReadMoreBtnVisible(showBtn);
      }
    };
    heightControl();

    window.addEventListener('resize', heightControl);

    return () => {
      window.removeEventListener('resize', heightControl);
    };
  }, [text]);

  return (
    <>
      <div className="flex flex-col w-full h-[332px] md:h-[462px] bg-white rounded-tl-[50px] rounded-br-[50px]  md:rounded-tl-[150px] md:rounded-br-[150px] py-[37px] px-[26px] xl:w-[734px] xl:h-[520px] reviews-card relative md:py-[70px] md:px-[80px]">
        <ReviewsCardText
          name={name}
          city={city}
          text={text}
          textRef={textRef}
          isCardText
        />

        {isReadMoreBtnVisible && (
          <button
            className="font-mulish text-descriptionFontSize leading-[1.5] text-buttonIcon block ml-auto md:text-descriptionFontSize font-normal md:font-normal hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 transition xl:leading-[1.5]"
            onClick={onReadMoreBtnClick}
          >
            {readMoreBtnText}
          </button>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeReviewsModal}
        closeBtnStyles="top-[-20px] right-[-12px]"
        ariaLabel={modalBtnAria}
        modalStyles="bg-white rounded-tl-[50px] rounded-br-[50px] w-[320px] md:w-[684px] xl:w-[868px] py-[37px] px-[26px] reviews-card relative md:rounded-tl-[150px] md:rounded-br-[150px] md:py-[70px] md:px-[80px]"
        isPopUp
      >
        <ReviewsCardText
          name={name}
          city={city}
          text={text}
          textRef={textRef}
          isCardText={false}
        />
      </Modal>
    </>
  );
};
