import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyledSlider from './slider.styles';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

export default function SimpleSlider() {
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint at which settings will change
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Breakpoint at which settings will change
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Breakpoint at which settings will change
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <img
          src="/assets/images/ownat.webp"
          alt="Главная: Ownat"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/royalcanin.jpg"
          alt="Главная: Royal Canin: -15% на сухой корм для кошек и собак"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/wellkiss.webp"
          alt="Главная: Скидки до 50% на корма, товары ветаптеки и аксессуары для питомцев"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/unica.webp"
          alt="Главная: Unica: 1+1 сухой корм для кошек в подарок"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/grandin.webp"
          alt="Главная: Grandin: до -30% на сухой и влажный корм для кошек и собак"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/hills.webp"
          alt="Главная: Hill`s: до -50% на сухой и влажный корм для кошек и собак"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src="/assets/images/hiPet.webp"
          alt="Главная: Новая коллекция HiPet"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </StyledSlider>
  );
}
