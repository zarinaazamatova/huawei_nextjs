import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.textColors.lightGrey};
    font-size: ${theme.fontSizes.base};
    text-decoration: none;
  `}
`;

export const StyledNewsSection = styled.div`
  display: block;
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
`;

export const StyledMainPageLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.textColors.lightGrey};
  `}
`;

export const StyledH1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.textColors.primary};
  `}
`;

export const StyledInfoBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
`;

export const StyledInfoBlocksItem = styled.div`
  position: relative;
  display: block;
  width: 290px;
  height: 310px;
  margin: 0 20px 30px 0;
`;

export const StyledInfoBlocksItemLink = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
`;
export const StyledInfoBlocksItemTitle = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 63px;
    margin: 5px 20px;
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.textColors.primary};
    text-overflow: ellipsis;
    text-decoration: none;
    overflow: hidden;
  `};
`;

export const StyledInfoBlocksSnippet = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    margin: 6px 0 5px 20px;
    padding: 5px 7px 0;
    border: 1px solid #ff6927;
    border-radius: 2px;
    font-size: ${theme.fontSizes.xxs};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.textColors.orange};
    text-align: left;
    text-transform: uppercase;
    text-decoration: none;
  `};
`;

export const StyledInfoBlocksItemDate = styled.time`
  ${({ theme }) => css`
    position: absolute;
    bottom: 15px;
    left: 0;
    display: block;
    margin: 0 15px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.textColors.lightGrey};
    line-height: 1.4;
    text-decoration: none;
  `};
`;
