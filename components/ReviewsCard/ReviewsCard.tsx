'use client';
import React, { useEffect, useState } from 'react';
import _ from 'underscore.string';
// type ReviewCardProps = {
//   name: string;
//   city: string;
//   text: string;
// };

export const ReviewsCard = () => {
  const [isReadMoreBtnVisible, setIsReadMoreBtnVisible] = useState(false);
  const text =
    'Я постійно закупляю вазони у цього продавця, оскільки ціни, якість, вичерпна інформація та оперативність, привітність, підтримка по догляду після продажу вазона для мене дуже важливі! Ціни супер, якість теж!';

  const truncatedText: string = _.truncate(text, 205);

  useEffect(() => {
    if (text.length > 205) {
      setIsReadMoreBtnVisible(true);
    }
  }, []);

  return (
    <div className="w-full h-[332px] bg-white rounded-tl-[50px] rounded-br-[50px] py-[37px] px-[26px] xl:w-[734px] xl:h-[520px]">
      <p></p>
      <p></p>
      <p>{truncatedText}</p>
      {isReadMoreBtnVisible && <button>Читати більше</button>}
    </div>
  );
};
