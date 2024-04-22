'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

import { ReviewsCard } from '@/components/ReviewsCard';

import data from '@/data/reviews.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

type ReviewType = {
  _id: string;
  name: string;
  city: string;
  text: string;
};

type SliderProps = {
  reviews: ReviewType[];
};

export const Slider = ({ reviews }: SliderProps) => {
  const { btnAriaPrev, btnAriaNext } = data;

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation, EffectFade]}
        className="reviews-slider  font-mulish"
        spaceBetween={30}
        effect={'fade'}
      >
        {reviews.map(review => {
          return (
            <SwiperSlide key={review._id}>
              <ReviewsCard
                name={review.name}
                city={review.city}
                text={review.text}
              />
            </SwiperSlide>
          );
        })}
        <button
          className="swiper-button-next bg-main py-2.5 px-3 rounded-full hover:bg-sliderBtnHover focus:bg-sliderBtnHover active:bg-subtitle transition"
          aria-label={btnAriaNext}
        ></button>
        <button
          className="swiper-button-prev  bg-main py-2.5 px-3 rounded-full hover:bg-sliderBtnHover focus:bg-sliderBtnHover active:bg-subtitle transition"
          aria-label={btnAriaPrev}
        ></button>
      </Swiper>
    </>
  );
};
