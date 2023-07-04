import React from 'react';
import Image from 'next/image';
import logo from '../../assets/png/logo.svg';
import * as S from './header.styles';
import Geolocation from '../../assets/svg/geolacation';
import list from '../../assets/png/list.png';
import user from '../../assets/png/user.png';
import arrow from '../../assets/png/chevron-down.png';
import heart from '../../assets/png/heart.png';
import cart from '../../assets/png-files/cart.png';

function Header() {
  return (
    <S.StyledDivContainer>
      <S.StyledDivTop>
        <S.StyledDivLacation>
          <Geolocation width={30} height={35} />
          <S.StyledDivCity>Москва</S.StyledDivCity>
          <Image
            src={arrow}
            alt="arrow"
            className="icon-arrow-down"
            width={12}
            height={15}
            style={{ padding: '5px' }}
          />
        </S.StyledDivLacation>
        <S.StyledDivBonusSide>
          <S.StyledDivMenu>Бесплатная доставка от 500 ₽</S.StyledDivMenu>
          <S.StyledDivMenu>Бонусная программа</S.StyledDivMenu>
          <S.StyledDivMenu>Мобильное приложение</S.StyledDivMenu>
        </S.StyledDivBonusSide>
      </S.StyledDivTop>

      <S.StyledHeaderCenter>
        <Image src={logo} alt="arrow" className="icon-map" width={224} />
        <S.StyledDivCatalog>
          <Image
            src={list}
            alt="list"
            className="icon-list"
            width={16}
            height={16}
            style={{ padding: '0 15px 0 0' }}
          />
          <S.StyledSpanCatalogTitle>Каталог</S.StyledSpanCatalogTitle>

          {/* here will be a Form(input) from Asel */}
        </S.StyledDivCatalog>
        <S.StyledDivUserInfo>
          <Image src={user} alt="user" className="icon-user" width={16} height={16} />
          <span>Войти</span>
          <Image
            src={arrow}
            alt="arrow"
            className="icon-arrow-down"
            width={12}
            height={15}
            style={{ padding: '5px' }}
          />
          <S.StyledDivSelections>
            <Image
              src={heart}
              alt="heart"
              className="icon-heart"
              width={16}
              height={16}
              style={{ padding: '5px' }}
            />
            <span>Избранное</span>
            <S.StyledSpanCounter>0</S.StyledSpanCounter>
          </S.StyledDivSelections>
          <S.StyledDivCart>
            <Image
              src={cart}
              alt="cart"
              className="icon-cart"
              width={16}
              height={16}
              style={{ padding: '5px' }}
            />
            <span>Корзина</span>
            <S.StyledSpanCounter>0</S.StyledSpanCounter>
          </S.StyledDivCart>
        </S.StyledDivUserInfo>
      </S.StyledHeaderCenter>

      <S.StyledNav>
        <S.StyledUl>
          <S.StyledLi>Кошки</S.StyledLi>
          <S.StyledLi>Собаки</S.StyledLi>
          <S.StyledLi>Другие питомцы</S.StyledLi>
          <S.StyledLi>
            Пет сервисы
            <Image
              src={arrow}
              alt="arrow"
              className="icon-arrow-down"
              width={12}
              height={15}
              style={{ padding: '5px' }}
            />
          </S.StyledLi>
          <S.StyledLi>Акции</S.StyledLi>
          <S.StyledLi>Ветаптека</S.StyledLi>
          <S.StyledLi>Новинки</S.StyledLi>
          <S.StyledLi>
            Бренды
            <Image
              src={arrow}
              alt="arrow"
              className="icon-arrow-down"
              width={12}
              height={15}
              style={{ padding: '5px' }}
            />
          </S.StyledLi>
          <S.StyledLi>Магазины</S.StyledLi>
          <S.StyledLiButton>Защита от паразитов</S.StyledLiButton>
          <S.StyledLi>Доставка от 1 часа</S.StyledLi>
        </S.StyledUl>
      </S.StyledNav>
    </S.StyledDivContainer>
  );
}
export default Header;
