import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  cursor: 'pointer';
`;
export const OpenedContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;

    width: 50px;
    height: 50px;
    bottom: 3%;
    right: 3%;
    padding: 7px;
    border-radius: 35px;
    border-style: solid;
    border-color: ${theme.backgroundColors.orange};

    background-color: 'none';

    z-index: 2;
  `}
`;
export const ClosedContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;

    width: 50px;
    height: 50px;
    padding: 7px;
    bottom: 3%;
    right: 3%;

    border-radius: 35px;
    background-color: ${theme.backgroundColors.orange};

    z-index: 1;
  `}
`;
