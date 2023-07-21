import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    position: fixed;
    top: 90%;
    left: 90%;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: ${theme.backgroundColors.orange};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
    cursor: 'pointer';
  `};
`;
