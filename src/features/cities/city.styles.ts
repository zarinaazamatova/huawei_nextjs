import styled, { css } from 'styled-components';

export const StyledModalOverlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    width: 320px;
    display: isOpen ? 'flex' : 'none',
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.sm};
    text-align: center;
    line-height: 1.38;
    zIndex: 9999,
    opacity: 1;
  `}
`;

export const StyledModal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8da2b5;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: ${theme.textColors.white};
  `}
`;

export const StyledButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: ${theme.textColors.primary};
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    font-weight: ${theme.fontWeights.bold};
    cursor: pointer;
  `}
`;
