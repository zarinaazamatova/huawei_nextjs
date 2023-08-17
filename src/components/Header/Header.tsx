import Image from 'next/image';
import { Location } from './components/Location';
import { Bonus } from './components/Bonus';
import { Catalog } from './components/Catalog';
import { List } from './components/List';
import { UserInfo } from './components/UserInfo';
import logo from '../../assets/logo.svg';
import * as S from './Header.styles';
import user from '../../assets/user.png';
import arrow from '../../assets/chevronDown.png';
import heart from '../../assets/heart.png';
import cart from '../../assets/cart.png';

export const Header = () => {
  return (
    <S.StyledContainer>
      <S.StylePromotion>
        <Location />
        <Bonus />
      </S.StylePromotion>
      <S.StyledHeaderCenter>
        <Image src={logo} alt="logo" className="icon-logo" width={224} />
        <Catalog />
        {/* here will be a Form(input)  */}
        <S.StyledUserInfo>
          <UserInfo
            url=""
            name="Войти"
            icon={<Image src={user} alt="user" className="icon-user" width={16} height={16} />}
            dropDown={
              <Image src={arrow} alt="arrow" width={12} height={15} style={{ padding: '5px' }} />
            }
            amount={false}
          />
          <UserInfo
            url=""
            name="Избранное"
            icon={
              <Image src={heart} alt="selections" className="icon-heart" width={16} height={16} />
            }
            dropDown=""
            amount
          />
          <UserInfo
            url=""
            name="Корзина"
            icon={<Image src={cart} alt="cart" className="icon-cart" width={16} height={16} />}
            dropDown=""
            amount
          />
        </S.StyledUserInfo>
      </S.StyledHeaderCenter>

      <S.StyledNav>
        <List />
      </S.StyledNav>
    </S.StyledContainer>
  );
};
