import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay  } from 'swiper/modules';
import { MainDiv } from './SwiperOpinionsStyle';
import OpinionCardOne from './OpinionCards/OpinionCardOne';
import OpinionCardTwo from './OpinionCards/OpinionCardTwo';
import OpinionCardThree from './OpinionCards/OpinionCardThree';

export default function App() {
  return (
    <MainDiv>
      <Swiper 
      modules={[Autoplay]}  grabCursor={true} className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      >
        <SwiperSlide><OpinionCardTwo/></SwiperSlide>
        <SwiperSlide><OpinionCardOne/></SwiperSlide>
        <SwiperSlide><OpinionCardThree/></SwiperSlide>

      </Swiper>
    </MainDiv>
  );
}