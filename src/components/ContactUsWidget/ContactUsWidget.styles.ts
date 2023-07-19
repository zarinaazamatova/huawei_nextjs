import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    position: fixed;
    top: ${theme.spacing['0']};
    left: ${theme.spacing['0']};
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.bgColors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.base};
    cursor: 'pointer';
  `};
`;
