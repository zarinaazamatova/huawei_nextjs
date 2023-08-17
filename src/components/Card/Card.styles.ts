import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    width: 250px;
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.primary};
  `}
`;

export const StyledName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.bold};
  `}
`;

export const StyledDescription = styled.div`
  ${({ theme }) => css`
    height: 60px;
    font-size: ${theme.fontSizes.base};
  `}
`;

export const StyledComment = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    padding: 30px 0 10px;
    font-size: ${theme.fontSizes.base};
  `}
`;

export const StyledWeight = styled.div`
  ${({ theme }) => css`
    padding: 10px 0;
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.orange};
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    background-color: ${theme.backgroundColors.primary};
    font-size: ${theme.fontSizes.base};
  `}
`;

export const StyledAmount = styled.div`
  ${({ theme }) => css`
    margin: 0 5px;
    letter-spacing: 1px;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.bold};
  `}
`;
