import styled, { css } from 'styled-components';

export const StyledDivContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.bgColors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  `};
`;

/* Top
   ========================================================================== */
export const StyledDivTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0px 80px 0px 80px;
  box-sizing: border-box;
  width: ;
`;
export const StyledDivLacation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 2px 0px;
`;
export const StyledDivCity = styled.div`
  ${({ theme }) => css`
    color: ${theme.textColors.orange};
    font-size: ${theme.fontSizes.sm};
    font-weight: 300;
  `};
`;
export const StyledDivBonusSide = styled.div`
  position: relative;
  display: flex;
  margin: 0px 0px 0px 310px;
`;
export const StyledDivMenu = styled.div`
  ${({ theme }) => css`
    margin: 0px 0px 0px 20px;
    color: ${theme.textColors.darkGrey};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    vertical-align: top;
  `};
`;

/* Center
   ========================================================================== */

export const StyledHeaderCenter = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 80px 0px 80px;
`;
export const StyledDivCatalog = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    background-color: ${theme.bgColors.orange};
    border-radius: 4px;
    padding: 8px 7px 7px 7px;
    margin: 0 55px 0 0;
  `}
`;
export const StyledSpanCatalogTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.textColors.white};
    font-size: ${theme.fontSizes.xsm};
    font-weight: 700;
    line-height: 1.14;
    vertical-aling: middle;
    text-align: center;
  `}
`;

export const StyledDivUserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: 1.2;
    color: ${theme.textColors.primary};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
  `}
`;

export const StyledDivSelections = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 10px;
`;
export const StyledDivCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 10px;
`;
export const StyledSpanCounter = styled.span`
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
/* Nav
   ========================================================================== */

export const StyledNav = styled.nav`
  display: block;
  margin: 0px 80px 0px 80px;
`;
export const StyledUl = styled.ul`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin 10px 0 10px 0;
		width: auto;
`;
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 13px;
  line-height: 1.14;
  font-weight: 600;
`;

export const StyledLiButton = styled.button`
  ${({ theme }) => css`
    list-style: none;
    display: inline-block;
    margin: 0 25px 0 5px;
    font-size: 12px;
    line-height: 1.14;
    font-weight: 700;
    background-color: ${theme.bgColors.blue};
    color: ${theme.textColors.white};
    border-radius: 5px;
    border: 0;
    padding: 2px 5px;
  `}
`;
