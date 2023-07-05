import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    position: fixed;
    top: ${theme.spacing['0']};
    left: ${theme.spacing['0']};
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.bgColors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
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
    line-height: 1.2;
    color: ${theme.textColors.primary};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
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
  display: block;
  position: absolute;
  z-index: 2;
  bottom: 18px;
  left: 15px;
  min-width: 9px;
  height: 6px;
  padding: 2px;
  font-size: 7px;
  line-height: 1;
  text-align: center;
  border-radius: 14px;
  color: #fff;
  background-color: #0a8449;
`;

export const StyledNav = styled.nav`
  display: block;
  margin: 0px 80px;
`;
