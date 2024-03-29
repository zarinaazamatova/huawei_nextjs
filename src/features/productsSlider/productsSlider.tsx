import React, { ReactElement } from 'react';
import { ProductType } from '@/productsData';
import { Card } from '../../components/Card';
import * as S from './productsSlider.styles';
import { useSliderConfigs } from './productsSlider.hooks';

type SliderType = {
  products: ProductType[];
};

export const ProductSlider = ({ products }: SliderType): ReactElement => {
  const settings = useSliderConfigs();

  return (
    <S.StyledContainer>
      <S.StyledTitle>Самые востребованные товары</S.StyledTitle>
      <S.StyledWrapper {...settings}>
        {products.map((product) => (
          <Card product={product} />
        ))}
      </S.StyledWrapper>
    </S.StyledContainer>
  );
};
