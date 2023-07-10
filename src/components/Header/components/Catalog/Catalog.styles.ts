import styled, { css } from 'styled-components';

export const StyledCatalog = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.backgroundColors.orange};
    border-radius: 4px;
    padding: 10px;
  `}
`;
export const StyledCatalogTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.textColors.white};
    font-size: ${theme.fontSizes.xsm};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1.14;
    vertical-aling: middle;
    text-align: center;
  `}
`;
