import styled, { css } from 'styled-components';
import {
  LiaShoppingBagSolid,
  LiaShoppingCartSolid,
  LiaMapMarkerAltSolid,
  LiaStar,
} from 'react-icons/lia';
import Link from 'next/link';

export const StyledLiaShoppingBagSolid = styled(LiaShoppingBagSolid)`
  ${({ theme }) => css`
    margin-right: 20px;
    width: 45px;
    height: auto;
    color: ${theme.textColors.secondary};
  `}
`;

export const StyledLiaShoppingCartSolid = styled(LiaShoppingCartSolid)`
  ${({ theme }) => css`
    margin-right: 20px;
    width: 45px;
    height: auto;
    color: ${theme.textColors.secondary};
  `}
`;
export const StyledLiaMapMarkerAltSolid = styled(LiaMapMarkerAltSolid)`
  ${({ theme }) => css`
    margin-right: 20px;
    width: 45px;
    height: auto;
    color: ${theme.textColors.secondary};
  `}
`;
export const StyledLiaStar = styled(LiaStar)`
  ${({ theme }) => css`
    margin-right: 20px;
    width: 45px;
    height: auto;
    color: ${theme.textColors.secondary};
  `}
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 1.6;
`;

export const StyledHeader = styled.div`
  display: block;
  margin: 50px 0 20px 0;
  font-size: 28px;
  font-weight: bold;
`;

export const StyledSections = styled.div`
  ${({ theme }) => css`
     {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: 20px 0;
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.fontSizes.base};
      line-height: 1.6;
    }
  `}
`;

export const StyledIcon = styled.div`
  display: block;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => `{
    color: ${theme.textColors.orange};
}
`}
`;
