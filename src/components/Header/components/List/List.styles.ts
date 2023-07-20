import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const StyledImage = styled(Image)`
  padding-right: 5px;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
    text-decoration: none;
  `}
`;

export const StyledLinkWhite = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.textColors.white};
    text-decoration: none;
  `}
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 0;
`;
export const StyledListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    list-style: none;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    text-decoration: none;
  `}
`;

export const StyledAnchor = styled.span`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
  `}
`;

export const StyledAnchorButton = styled.span`
  ${({ theme }) => css`
    color: ${theme.textColors.white};
    line-height: 1.14;
  `}
`;

export const StyledLiButton = styled.button`
  ${({ theme }) => css`
    display: inline-block;
    margin: 0 15px;
    padding: 2px 5px;
    border-radius: 5px;
    border: 0;
    background-color: ${theme.bgColors.blue};
    font-size: ${theme.fontSizes.xsm};
    font-weight: ${theme.fontWeights.bold};
    background-color: ${theme.backgroundColors.blue};
    color: ${theme.textColors.white};
    line-height: 1.14;
    list-style: none;
  `}
`;
