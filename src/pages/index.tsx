import React from 'react';
import styled from 'styled-components';
import { Slider } from '../components/Slider';

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.backgroundColors.accent};
`;

export default function Home() {
  return (
    <>
      <StyledH1>My page</StyledH1>
      <Slider />
    </>
  );
}
