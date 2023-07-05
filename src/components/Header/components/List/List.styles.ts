import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: auto;
`;
export const StyledListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    list-style: none;
    font-size: ${theme.fontSizes.sm};
    line-height: 1.14;
    font-weight: ${theme.fontWeights.bold};
    text-decoration: none;
  `}
`;
export const StyledAnchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
  `}
`;
export const StyledAnchorButton = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColors.white};
  `}
`;
export const StyledLiButton = styled.button`
  ${({ theme }) => css`
    list-style: none;
    display: inline-block;
    margin: 0 15px;
    font-size: ${theme.fontSizes.xsm};
    line-height: 1.14;
    font-weight: ${theme.fontWeights.bold};
    background-color: ${theme.bgColors.blue};
    color: ${theme.textColors.white};
    border-radius: 5px;
    border: 0;
    padding: 2px 5px;
  `}
`;
