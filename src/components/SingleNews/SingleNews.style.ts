import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 10%;
    left: ${theme.spacing['0']};
    display: block;
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    background-color: ${theme.backgroundColors.primary};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
  `};
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0px 80px;
`;

export const StyledHeading = styled.h1`{
 ${({ theme }) => css`
   margin-top: 80px;
   font-family: 'Roboto', sans-serif;
   font-size: ${theme.fontSizes.xxl};
   color: ${theme.textColors.primary};
 `}`;

export const StyledDate = styled.h6`{
 ${({ theme }) => css`
   font-family: 'Roboto', sans-serif;
   font-size: ${theme.fontSizes.md};
   color: ${theme.textColors.lightGrey};
 `}`;

export const StyledParagraph = styled.p`{
 ${({ theme }) => css`
   margin-top: 60px;
   font-family: 'Roboto', sans-serif;
   font-size: ${theme.fontSizes.md};
   color: ${theme.textColors.primary};
 `}`;
