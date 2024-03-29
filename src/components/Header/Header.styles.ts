import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: ${theme.spacing['0']};
    left: ${theme.spacing['0']};
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.backgroundColors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
    z-index: 3;
  `};
`;

export const StylePromotion = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0px 80px;
`;

export const StyledHeaderCenter = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 80px;
`;

export const StyledUserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.textColors.primary};
    line-height: 1.2;
  `}
`;

export const StyledSelections = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 10px;
`;
export const StyledCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 10px;
`;
export const StyledCounter = styled.span`
  position: absolute;
  bottom: 18px;
  left: 15px;
  display: block;
  min-width: 9px;
  height: 6px;
  padding: 2px;
  border-radius: 14px;
  font-size: 7px;
  color: #fff;
  text-align: center;
  line-height: 1;
  background-color: #0a8449;
  z-index: 2;
`;

export const StyledNav = styled.nav`
  display: block;
  margin: 0px 80px;
`;
