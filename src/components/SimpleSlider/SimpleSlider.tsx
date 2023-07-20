import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { StyledSlider } from './SimpleSlider.styles';
import { useSliderConfigs } from './Slider.hooks';
import {
  grandin,
  hills,
  hiPet,
  ownat,
  royalCanin,
  unica,
  wellKiss,
} from '../../../public/assets/images/index';

const sliderImages = [
  {
    image: grandin,
    alt: 'Главная: Grandin: до -30% на сухой и влажный корм для кошек и собак',
    id: 0,
  },
  {
    image: hills,
    alt: 'Главная: Hill`s: до -50% на сухой и влажный корм для кошек и собак',
    id: 1,
  },
  {
    image: hiPet,
    alt: 'Главная: Новая коллекция HiPet',
    id: 2,
  },
  {
    image: ownat,
    alt: 'Главная: Ownat',
    id: 3,
  },
  {
    image: royalCanin,
    alt: 'Главная: Royal Canin: -15% на сухой корм для кошек и собак',
    id: 4,
  },
  {
    image: unica,
    alt: 'Главная: Unica: 1+1 сухой корм для кошек в подарок',
    id: 5,
  },
  {
    image: wellKiss,
    alt: 'Главная: Скидки до 50% на корма, товары ветаптеки и аксессуары для питомцев ',
    id: 6,
  },
];

export const SimpleSlider = () => {
  const configs = useSliderConfigs();
  return (
    <StyledSlider {...configs}>
      {sliderImages.map((sliderImage) => {
        return (
          <div key={sliderImage.id}>
            <Image src={sliderImage.image} alt={sliderImage.alt} />
          </div>
        );
      })}
    </StyledSlider>
  );
};
