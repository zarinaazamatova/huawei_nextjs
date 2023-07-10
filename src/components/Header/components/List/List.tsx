import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './List.styles';
import arrow from '../../../../assets/chevron-down.png';

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
            <Link href={url} style={{ textDecoration: 'none' }}>
              <S.StyledAnchorButton>{name}</S.StyledAnchorButton>
            </Link>
          </S.StyledLiButton>
        ) : (
          <S.StyledListItem key={id}>
            <Link href={url} style={{ textDecoration: 'none' }}>
              <S.StyledAnchor>{name}</S.StyledAnchor>
            </Link>
            {icon ? (
              <Image src={arrow} alt="arrow" width={12} height={15} style={{ padding: '5px' }} />
            ) : null}
          </S.StyledListItem>
        );
      })}
    </S.StyledList>
  );
};
