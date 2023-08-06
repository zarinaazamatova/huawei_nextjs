import React, { ReactElement } from 'react';
import { ProductType } from '@/productsData';
import { Card } from '../../components/Card';
import * as S from './slider.styles';
import { useSliderConfigs } from './slider.hook';

type MyProducts = {
  products: ProductType[];
};

export const Slider = ({ products }: MyProducts): ReactElement => {
  const settings = useSliderConfigs();

  return (
    <S.StyledContainer>
      <S.StyledTitle>Самые востребованные товары</S.StyledTitle>
      <S.StyledWrapper {...settings}>
        {products.map((product) => (
          <div>
            <Card product={product} />
          </div>
        ))}
      </S.StyledWrapper>
    </S.StyledContainer>
  );
};
