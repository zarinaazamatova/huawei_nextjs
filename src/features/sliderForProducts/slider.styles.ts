import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 160px 0 60px 0;
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    margin: 150px 0 20px;
    font-size: ${theme.fontSizes.base};
    font-size: 2rem;
  `}
`;

export const StyledWrapper = styled(Slider)`
  position: relative;
  cursor: pointer;
`;

export const StyledIconLeft = styled(CiCircleChevLeft)`
  ${({ theme }) => css`
    position: absolute;
    top: -30px;
    left: 1200px;
    width: 35px;
    height: auto;
    color: ${theme.textColors.orange};

    :hover {
      border-radius: 50px;
      color: ${theme.textColors.white};
      background-color: ${theme.backgroundColors.orange};
    }
  `}
`;

export const StyledIconRight = styled(CiCircleChevRight)`
  ${({ theme }) => css`
    position: absolute;
    top: -30px;
    width: 35px;
    height: auto;
    right: 0px;
    color: ${theme.textColors.orange};

    :hover {
      border-radius: 50px;
      color: ${theme.textColors.white};
      background-color: ${theme.backgroundColors.orange};
      `}
    }
`;
