import React, { useRef, useState, useEffect } from 'react';
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

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onCloseCities);
  if (!isOpenCities) return null;

  const handleCityClick = (city: string) => {
    setCookie('city', city);
    onCloseCities();
  };

  return (
    <S.StyledModalOverlay className="modal-overlay">
      <S.StyledModal className="modal" ref={modalRef}>
        <div>
          {/* here will be a Form(input)  */}
          <S.StyledGroupOfCitites onClick={() => setActiveTab('moscowMO')}>
            Москва и МО
          </S.StyledGroupOfCitites>
          <S.StyledGroupOfCitites onClick={() => setActiveTab('bigCities')}>
            Большие города
          </S.StyledGroupOfCitites>
        </div>
        <div>
          <S.StyledCitiesBlock>
            {cities.map(({ id, name }) => (
              <S.StyledWithIcon key={id} onClick={() => handleCityClick(name)}>
                <GeolocationIcon width={30} height={35} />
                <div key={id}>{name}</div>
              </S.StyledWithIcon>
            ))}
          </S.StyledCitiesBlock>
        </div>
      </S.StyledModal>
    </S.StyledModalOverlay>
  );
};
React.memo(Cities);
