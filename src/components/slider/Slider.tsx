import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider } from './Slider.styles';
import { useSliderConfigs } from './Slider.hooks';

export const Slider = () => {
  const settings = useSliderConfigs();
  return (
    <StyledSlider {...settings}>
      <div>
        <img src="/assets/images/ownat.webp" alt="Главная: Ownat" />
      </div>
      <div>
        <img
          src="/assets/images/royalCanin.jpg"
          alt="Главная: Royal Canin: -15% на сухой корм для кошек и собак"
        />
      </div>
      <div>
        <img
          src="/assets/images/wellKiss.webp"
          alt="Главная: Скидки до 50% на корма, товары ветаптеки и аксессуары для питомцев"
        />
      </div>
      <div>
        <img
          src="/assets/images/unica.webp"
          alt="Главная: Unica: 1+1 сухой корм для кошек в подарок"
        />
      </div>
      <div>
        <img
          src="/assets/images/grandin.webp"
          alt="Главная: Grandin: до -30% на сухой и влажный корм для кошек и собак"
        />
      </div>
      <div>
        <img
          src="/assets/images/hills.webp"
          alt="Главная: Hill`s: до -50% на сухой и влажный корм для кошек и собак"
        />
      </div>
      <div>
        <img src="/assets/images/hiPet.webp" alt="Главная: Новая коллекция HiPet" />
      </div>
    </StyledSlider>
  );
};
