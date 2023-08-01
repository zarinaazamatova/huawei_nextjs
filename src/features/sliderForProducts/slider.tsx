import React from 'react';
import { ProductType } from '@/productsData';
import { Card } from '@/components/Card/Card';
import * as S from './slider.styles';
import { useSliderConfigs } from './slider.hook';

type MyProducts = {
  products: ProductType[];
};

export const Slider: React.FC<MyProducts> = ({ products }) => {
  const configs = useSliderConfigs();

  return (
    <div>
      <S.StyledTitle>Самые востребованные товары</S.StyledTitle>

      <S.StyledWrapper {...configs}>
        {products.map((product) => (
          <div>
            <Card product={product} />
          </div>
        ))}
      </S.StyledWrapper>
    </div>
  );
};
