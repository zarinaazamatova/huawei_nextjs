import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { StyledSlider } from './SimpleSlider.styles';
import { useSliderConfigs } from './Slider.hooks';

const sliderImages = [
  {
    image: '/assets/images/grandin.webp',
    alt: 'Главная: Grandin: до -30% на сухой и влажный корм для кошек и собак',
    id: 0,
  },
  {
    image: '/assets/images/hills.webp',
    alt: 'Главная: Hill`s: до -50% на сухой и влажный корм для кошек и собак',
    id: 1,
  },
  {
    image: '/assets/images/hiPet.webp',
    alt: 'Главная: Новая коллекция HiPet',
    id: 2,
  },
  {
    image: '/assets/images/ownat.webp',
    alt: 'Главная: Ownat',
    id: 3,
  },
  {
    image: '/assets/images/royalCanin.jpg',
    alt: 'Главная: Royal Canin: -15% на сухой корм для кошек и собак',
    id: 4,
  },
  {
    image: '/assets/images/unica.webp',
    alt: 'Главная: Unica: 1+1 сухой корм для кошек в подарок',
    id: 5,
  },
  {
    image: '/assets/images/wellKiss.webp',
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
            <Image src={sliderImage.image} alt={sliderImage.alt} width={1300} height={280} />
          </div>
        );
      })}
    </StyledSlider>
  );
};
