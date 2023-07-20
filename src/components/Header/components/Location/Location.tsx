import React from 'react';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';
import * as S from './Location.styles';
import arrow from '../../../../assets/chevronDown.png';

export const Location = () => {
  return (
    <S.StyledDivLocation>
      <GeolocationIcon width={30} height={35} />
      <S.StyledDivCity>Москва</S.StyledDivCity>
      <S.StyledImage src={arrow} alt="arrow" className="icon-arrow-down" width={12} height={15} />
    </S.StyledDivLocation>
  );
};
