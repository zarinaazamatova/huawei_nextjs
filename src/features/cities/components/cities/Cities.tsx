import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { setCookie } from 'cookies-next';
import * as S from './Cities.styles';
import { fetchCities } from './api';
import { useOutsideClick } from './Cities.hook';
import { CitiesItem } from './Cities.types';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';

type TabComponentProps = {
  isOpenCities: boolean;
  onCloseCities: () => void;
};

export const Cities: React.FC<TabComponentProps> = ({ isOpenCities, onCloseCities }) => {
  const [activeTab, setActiveTab] = useState('moscowMO');
  const [cities, setCities] = useState<CitiesItem[]>([]);
  const [myCity, setMyCity] = useState('');

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const data = await fetchCities(activeTab);
        setCities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [activeTab]);

  const handleCityClick = useCallback(
    (city: string) => {
      setCookie('city', city);
      setMyCity(city);
      onCloseCities();
    },
    [onCloseCities],
  );

  const allCities = useMemo(() => {
    return cities.map(({ id, name }) => (
      <S.StyledWithIcon key={id} onClick={() => handleCityClick(name)}>
        <GeolocationIcon width={30} height={35} />
        <div className={`my-city ${myCity === name ? 'active' : ''}`}>{name}</div>
      </S.StyledWithIcon>
    ));
  }, [cities, handleCityClick, myCity]);

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onCloseCities);
  if (!isOpenCities) return null;

  return (
    <S.StyledModalOverlay className="modal-overlay">
      <S.StyledModal className="modal" ref={modalRef}>
        <div>
          {/* here will be a Form(input)  */}
          <S.StyledGroupOfCitites onClick={() => setActiveTab('moscowMO')}>
            <div className={`tab ${activeTab === 'moscowMO' ? 'active' : ''}`}>Москва и МО</div>
          </S.StyledGroupOfCitites>
          <S.StyledGroupOfCitites onClick={() => setActiveTab('bigCities')}>
            <div className={`tab ${activeTab === 'bigCities' ? 'active' : ''}`}>Большие города</div>
          </S.StyledGroupOfCitites>
        </div>
        <div>
          <S.StyledCitiesBlock>{allCities}</S.StyledCitiesBlock>
        </div>
      </S.StyledModal>
    </S.StyledModalOverlay>
  );
};

/* styled.div`
  ${({ isBold }) => isBold && `font-weight: 700`}
  isBold = 
`; */
