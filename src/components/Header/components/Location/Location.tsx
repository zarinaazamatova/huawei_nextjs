import React from 'react';
import Image from 'next/image';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';
import * as S from './Location.styles';
import arrow from '../../../../assets/chevron-down.png';

export const Location = () => {
  return (
    <S.StyledDivLocation>
      <GeolocationIcon width={30} height={35} />
      <S.StyledDivCity>Москва</S.StyledDivCity>
      <Image
        src={arrow}
        alt="arrow"
        className="icon-arrow-down"
        width={12}
        height={15}
        style={{ padding: '5px' }}
      />
    </S.StyledDivLocation>
  );
};
