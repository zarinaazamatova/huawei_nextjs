import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    width: 100%;
    list-style: none;
    text-align: center;
  }
  li {
    display: inline-block;
    line-height: ${({ theme }) => theme.spacing['4']};
    width: ${({ theme }) => theme.spacing['2']};
  }
  img {
    width: 100%;
    height: auto;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: ${({ theme }) => theme.backgroundColors.light};
    background-color: ${({ theme }) => theme.backgroundColors.light};
    width: ${({ theme }) => theme.spacing['6']};
    height: ${({ theme }) => theme.spacing['6']};
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
      font-size: ${({ theme }) => theme.spacing['6']};
      background-color: ${({ theme }) => theme.backgroundColors.primary};
    }
}

  #arrowPrev{
    left: ${({ theme }) => theme.spacing['4']};
    transform: translateY(-24px) translateX(-8px) rotate(180deg);
  }

  #arrowNext {
    right: ${({ theme }) => theme.spacing['4']};
    }
  }
`;
