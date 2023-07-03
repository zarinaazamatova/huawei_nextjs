import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../components/slider/Slider';

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.bgColors.accent};
`;

export default function Home() {
  return (
    <>
      <StyledH1>My page</StyledH1>
      <SimpleSlider />
    </>
  );
}
