import styled, { css } from 'styled-components';

export const StyledNewsSection = styled.div`
  display: block;
  margin-top: 180px;
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
  display: block;
  width: 290px;
  height: 310px;
  margin-right: 20px;
  position: relative;
  margin-bottom: 30px;
`;

export const StyledInfoBlocksItemLink = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  position: relative;
  border-radius: 3px;
`;
export const StyledInfoBlocksItemTitle = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    height: 63px;
    text-overflow: ellipsis;
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.textColors.primary};
    margin: 5px 20px;
    text-decoration: none;
    position: relative;
  `};
`;

export const StyledInfoBlocksSnippet = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxs};
    font-weight: ${theme.fontWeights.bold};
    display: inline-block;
    position: relative;
    margin-bottom: 5px;
    margin-top: 6px;
    padding: 5px 7px 0;
    text-align: left;
    text-transform: uppercase;
    color: ${theme.textColors.orange};
    border: 1px solid #ff6927;
    border-radius: 2px;
    margin-left: 20px;
    text-decoration: none;
  `};
`;

export const StyledInfoBlocksItemDate = styled.time`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
    left: 0;
    margin: 0 20px;
    color: ${theme.textColors.lightGrey};
    font-size: ${theme.fontSizes.xs};
    line-height: 1.4;
    text-decoration: none;
  `};
`;
