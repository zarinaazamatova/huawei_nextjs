import React from 'react';
import * as S from './List.styles';
import arrow from '../../../../assets/chevronDown.png';

const NavData = [
  { id: 1, name: 'Кошки', url: '' },
  { id: 2, name: 'Собаки', url: '' },
  { id: 3, name: 'Другие питомцы', url: '' },
  { id: 4, name: 'Пет сервисы', url: '', icon: 'true' },
  { id: 5, name: 'Акции', url: '' },
  { id: 6, name: 'Ветаптека', url: '' },
  { id: 7, name: 'Новинки', url: '' },
  { id: 8, name: 'Бренды', url: '', icon: 'true' },
  { id: 9, name: 'Магазины', url: '' },
  { id: 10, name: 'Защита от паразитов', url: '', button: 'true' },
  { id: 11, name: 'Доставка от 1 часа', url: '' },
];

export const List = () => {
  return (
    <S.StyledList>
      {NavData.map(({ id, name, url, icon, button }) => {
        return button ? (
          <S.StyledLiButton key={id}>
            <S.StyledLinkWhite href={url}>{name}</S.StyledLinkWhite>
          </S.StyledLiButton>
        ) : (
          <S.StyledListItem key={id}>
            <S.StyledLink href={url}>{name}</S.StyledLink>
            {icon ? <S.StyledImage src={arrow} alt="arrow" width={12} height={15} /> : null}
          </S.StyledListItem>
        );
      })}
    </S.StyledList>
  );
};
