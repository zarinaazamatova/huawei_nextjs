import styled, { css } from 'styled-components';
import Slider from 'react-slick';

export const StyledContainer = styled.div`
  margin-top: 160px;
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    margin: 150px 0 20px;
    font-size: ${theme.fontSizes.base};
    font-size: 2rem;
  `}
`;

export const StyledWrapper = styled(Slider)`
  cursor: pointer;
`;
