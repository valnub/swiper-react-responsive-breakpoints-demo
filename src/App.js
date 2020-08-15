import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './styles.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

export default () => {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          style={{ width: '100%' }}
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <div id="title">Resize window to see responsiveness</div>
      <Swiper
        breakpoints={{
          // when window width is >= 480px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        id="main"
        width="480"
        navigation
        spaceBetween={5}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
      <div id="bp-wrapper">
        <span id="bp-480">480p breakpoint</span>
        <span id="bp-640">640p breakpoint</span>
        <span id="bp-768">768p breakpoint</span>
      </div>
    </React.Fragment>
  );
};
