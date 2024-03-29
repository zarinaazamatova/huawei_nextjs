import styled, { css } from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
  padding: 5px;
`;

export const StyledDivLocation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
export const StyledDivCity = styled.div`
  ${({ theme }) => css`
    color: ${theme.textColors.orange};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.light};
  `};
`;
