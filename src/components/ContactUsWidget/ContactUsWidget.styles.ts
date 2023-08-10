import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  cursor: 'pointer';
`;
export const OpenedContainer = styled.button`
  ${({ theme }) => css`
    position: fixed;

    width: 60px;
    height: 60px;
    bottom: 3%;
    right: 3%;
    padding: 4px;
    border-radius: 35px;
    border-style: solid;
    border-color: ${theme.backgroundColors.orange};

    background-color: 'none';

    z-index: 2;
  `}
`;
export const ClosedContainer = styled.button`
  ${({ theme }) => css`
    position: fixed;

    width: 60px;
    height: 60px;
    padding: 5px;
    bottom: 3%;
    right: 3%;

    border-radius: 35px;
    border-style: none;
    background-color: ${theme.backgroundColors.orange};

    z-index: 1;
  `}
`;
