import React, { ReactElement } from 'react';
import * as S from './productsSlider.styles';

type SlickSliderProps = {
  dots: boolean;
  arrow: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  adaptiveHeight: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  prevArrow: ReactElement;
  nextArrow: ReactElement;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
};

export const useSliderConfigs = (): SlickSliderProps => {
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
    prevArrow: <S.StyledIconLeft />,
    nextArrow: <S.StyledIconRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return configs;
};
