import styled, { css } from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
    text-decoration: none;
  `}
`;

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
  position: absolute;
  bottom: 18px;
  left: 15px;
  display: block;
  min-width: 9px;
  height: 6px;
  padding: 2px;
  background-color: #0a8449;
  border-radius: 14px;
  font-size: 7px;
  color: #fff;
  text-align: center;
  line-height: 1;
  z-index: 2;
`;
export const StyledAnchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
  `}
`;
