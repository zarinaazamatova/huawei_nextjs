import React from 'react';
import { StyledLayout } from './Layout.styles';
import { Header } from '../Header';
import { News } from '../News';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <News />
    </StyledLayout>
  );
};
