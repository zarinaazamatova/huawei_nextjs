import React from 'react';
import { Arrow } from '../Arrow/Arrow';

export const useSliderConfigs = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 480,
      },
    ],
  };
  return settings;
};
