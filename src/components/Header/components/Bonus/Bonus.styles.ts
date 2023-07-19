import styled, { css } from 'styled-components';

export const StyledBonusSide = styled.div`
  position: relative;
  display: flex;
`;
export const StyledMenu = styled.div`
  ${({ theme }) => css`
    vertical-align: top;
    margin-left: 20px;
    color: ${theme.textColors.darkGrey};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
  `};
`;
