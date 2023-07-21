import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme, isOpen }) => css`
    box-sizing: border-box;
    position: fixed;
    bottom: 3%;
    right: 3%;
    padding: 7px;
    width: 65px;
    height: 65px;
    border-radius: 35px;
    border-style: solid;
    border-color: ${theme.backgroundColors.orange};
    background-color: ${isOpen ? 'none' : theme.backgroundColors.orange};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
    cursor: 'pointer';
  `};
`;
