import React, { ReactElement } from 'react';
import * as S from './Catalog.styles';
import list from '../../../../assets/list.png';

export const Catalog = (): ReactElement => {
  return (
    <S.StyledCatalog>
      <S.StyledImage src={list} alt="list" className="icon-list" width={16} height={16} />
      <S.StyledCatalogTitle>Каталог</S.StyledCatalogTitle>
    </S.StyledCatalog>
  );
};
