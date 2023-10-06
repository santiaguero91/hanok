import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MainDiv } from './SwiperOpinionsStyle';
import OpinionCardOne from './OpinionCards/OpinionCardOne';
import OpinionCardTwo from './OpinionCards/OpinionCardTwo';
import OpinionCardThree from './OpinionCards/OpinionCardThree';

export default function App() {
  return (
    <MainDiv>
      <Swiper navigation={true} modules={[Navigation]}  grabCursor={true} className="mySwiper">
        <SwiperSlide><OpinionCardTwo/></SwiperSlide>
        <SwiperSlide><OpinionCardOne/></SwiperSlide>
        <SwiperSlide><OpinionCardThree/></SwiperSlide>

      </Swiper>
    </MainDiv>
  );
}