import React, { useState, ReactElement, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Modal } from '../../../../features/cities';
import { Cities } from '../../../../features/cities/components/cities';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';
import * as S from './Location.styles';
import arrow from '../../../../assets/chevronDown.png';
import { Cookies } from '../../../../constants';

export const Location = (): ReactElement | null => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCities, setIsOpenCities] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const city = getCookie(Cookies.City);
  const country = getCookie(Cookies.Country);
  console.log(country, 'ccc');

  const handleModalWindows = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseCities = (): void => {
    setIsOpenCities(false);
  };

  const handleOpenCities = (): void => {
    setIsOpenCities(true);
    setIsOpen(false);
  };

  useEffect(() => {
    setShowCity(true);
  }, []);

  if (!showCity) {
    return null;
  }
  return (
    <div>
      <S.StyledDivLocation onMouseEnter={handleModalWindows} onMouseLeave={handleModalWindows}>
        <GeolocationIcon width={30} height={35} />
        <S.StyledDivCity>{city ?? 'Москва'}</S.StyledDivCity>
        <S.StyledImage src={arrow} alt="arrow" className="icon-arrow-down" width={12} height={15} />
        <Modal isOpen={isOpen} onClose={handleModalWindows} onOpenCities={handleOpenCities} />
      </S.StyledDivLocation>
      <Cities isOpenCities={isOpenCities} onCloseCities={handleCloseCities} />
    </div>
  );
};
