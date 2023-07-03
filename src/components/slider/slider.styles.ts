import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  /* Custom styles for dots */
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
  /* Custom styles for arrows */
  .prevArrow,
  .nextArrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: ${({ theme }) => theme.bgColors.light};
    background-color: ${({ theme }) => theme.bgColors.light};
    width: ${({ theme }) => theme.spacing['6']};
    height: ${({ theme }) => theme.spacing['6']};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
      font-size: ${({ theme }) => theme.spacing['6']};
      background-color: ${({ theme }) => theme.bgColors.primary};
    }
  }

  .prevArrow {
    left: ${({ theme }) => theme.spacing['4']};
  }

  .nextArrow {
    right: ${({ theme }) => theme.spacing['4']};
  }
`;
export default StyledSlider;
