import styled, { css } from 'styled-components';

export const StyledSelections = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 10px;
    font-weight: ${theme.fontWeights.bold};
  `}
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
export const StyledAnchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
  `}
`;
