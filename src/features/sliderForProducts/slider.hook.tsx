import React from 'react';
import { Arrow } from '../../components/Arrow';

export const useSliderConfigs = () => {
  const configs = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <Arrow arrowType="nextArrow" />,
    prevArrow: <Arrow arrowType="prevArrow" />,
    ResponsiveObject: [
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
  return configs;
};
