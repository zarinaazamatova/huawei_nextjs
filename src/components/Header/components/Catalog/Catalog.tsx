import React from 'react';
import Image from 'next/image';
import * as S from './Catalog.styles';
import list from '../../../../assets/list.png';

export const Catalog = () => {
  return (
    <S.StyledCatalog>
      <Image
        src={list}
        alt="list"
        className="icon-list"
        width={16}
        height={16}
        style={{ padding: '0 15px 0 0' }}
      />
      <S.StyledCatalogTitle>Каталог</S.StyledCatalogTitle>
    </S.StyledCatalog>
  );
};
