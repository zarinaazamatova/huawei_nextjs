import React, { ReactElement } from 'react';
import { StyledLayout } from './Layout.styles';
import { Header } from '../Header';

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};
