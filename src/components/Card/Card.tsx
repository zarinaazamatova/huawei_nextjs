import React from 'react';
import Image from 'next/image';
import { ProductType } from '@/productsData';
import cart from '../../assets/cart.png';
import * as S from './Card.styles';

type MyProducts = {
  product: ProductType;
};

export const Card: React.FC<MyProducts> = ({ product }) => {
  return (
    <div>
      <S.StyledContainer>
        <Image alt="product" src={product.img} width={230} height={220} />
        <S.StyledName>{product.name}</S.StyledName>
        <S.StyledDescription>{product.description}</S.StyledDescription>
        <S.StyledComment>⭐️⭐️⭐️⭐️⭐️</S.StyledComment>
        <S.StyledComment>({product.comment})</S.StyledComment>
        <S.StyledWeight>{product.weight} </S.StyledWeight>
        <S.StyledButton>
          <Image src={cart} alt="selections" className="icon-heart" width={18} height={18} />
          <S.StyledAmount> {product.amount} ₽</S.StyledAmount>
        </S.StyledButton>
      </S.StyledContainer>
    </div>
  );
};
