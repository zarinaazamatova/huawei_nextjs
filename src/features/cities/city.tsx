import React from 'react';
import { getCookie } from 'cookies-next';
import * as S from './city.styles';

type ModalWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenCities: () => void;
};

export const Modal: React.FC<ModalWindowProps> = ({ isOpen, onClose, onOpenCities }) => {
  const city = getCookie('city') ?? 'Москва';
  if (!isOpen) return null;

  return (
    <S.StyledModalOverlay className="modal-overlay">
      <S.StyledModal className="modal">
        <div>Ваш город {city}?</div>
        <S.StyledButtons className="modal-buttons">
          <S.StyledButton type="button" onClick={onClose}>
            Да
          </S.StyledButton>
          <S.StyledButton type="button" onClick={onOpenCities}>
            Нет, выбрать другой
          </S.StyledButton>
        </S.StyledButtons>
      </S.StyledModal>
    </S.StyledModalOverlay>
  );
};
