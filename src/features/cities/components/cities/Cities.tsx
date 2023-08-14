import React, { useRef, useState, useEffect, useMemo, useCallback, ReactElement } from 'react';
import { setCookie } from 'cookies-next';
import * as S from './Cities.styles';
import { fetchCities } from './api';
import { useOutsideClick } from './Cities.hooks';
import { CitiesItem } from './Cities.types';
import { GeolocationIcon } from '../../../../assets/svg/geolacationIcon';

type TabComponentProps = {
  isOpenCities: boolean;
  onCloseCities: () => void;
};

enum GroupOfCitties {
  BigCitites = 'bigCities',
  MoscowRegion = 'moscowMO',
}
export const Cities = ({ isOpenCities, onCloseCities }: TabComponentProps): ReactElement | null => {
  const [activeTab, setActiveTab] = useState(GroupOfCitties.MoscowRegion);
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

  const citiesList = useMemo(() => {
    return cities.map(({ id, name }: CitiesItem) => (
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
          <S.StyledGroupOfCitites onClick={() => setActiveTab(GroupOfCitties.MoscowRegion)}>
            <div className={`tab ${activeTab === GroupOfCitties.MoscowRegion ? 'active' : ''}`}>
              Москва и МО
            </div>
          </S.StyledGroupOfCitites>
          <S.StyledGroupOfCitites onClick={() => setActiveTab(GroupOfCitties.BigCitites)}>
            <div className={`tab ${activeTab === GroupOfCitties.BigCitites ? 'active' : ''}`}>
              Большие города
            </div>
          </S.StyledGroupOfCitites>
        </div>
        <div>
          <S.StyledCitiesBlock>{citiesList}</S.StyledCitiesBlock>
        </div>
      </S.StyledModal>
    </S.StyledModalOverlay>
  );
};
