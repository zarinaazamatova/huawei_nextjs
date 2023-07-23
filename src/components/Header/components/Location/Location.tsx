import React, { useState, ReactElement, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Modal } from '../../../../features/cities';
import { Cities } from '../../../../features/cities/components/cities';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';
import * as S from './Location.styles';
import arrow from '../../../../assets/chevronDown.png';

export const Location: React.FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCities, setIsOpenCities] = useState(false);
  const city = getCookie('city');

  const [showCity, setShowCity] = useState(false);
  useEffect(() => {
    setShowCity(true);
  }, []);

  if (!showCity) {
    return <> </>;
  }

  const handleImageHover = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCloseCities = () => {
    setIsOpenCities(false);
  };

  const handleOpenCities = () => {
    setIsOpenCities(true);
    setIsOpen(false);
  };

  return (
    <div>
      <S.StyledDivLocation onMouseEnter={handleImageHover} onMouseLeave={handleCloseModal}>
        <GeolocationIcon width={30} height={35} />
        <S.StyledDivCity>{city}</S.StyledDivCity>
        <S.StyledImage src={arrow} alt="arrow" className="icon-arrow-down" width={12} height={15} />
        <Modal isOpen={isOpen} onClose={handleCloseModal} onOpenCities={handleOpenCities} />
      </S.StyledDivLocation>
      <Cities isOpenCities={isOpenCities} onCloseCities={handleCloseCities} />
    </div>
  );
};
