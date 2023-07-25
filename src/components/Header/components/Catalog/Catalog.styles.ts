import styled, { css } from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
  padding-right: 15px;
`;

export const StyledCatalog = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.backgroundColors.orange};
    padding: 10px;
    border-radius: 4px;
  `}
`;
export const StyledCatalogTitle = styled.span`
  ${({ theme }) => css`
    vertical-aling: middle;
    color: ${theme.textColors.white};
    font-size: ${theme.fontSizes.xsm};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1.14;
    text-align: center;
  `}
`;
