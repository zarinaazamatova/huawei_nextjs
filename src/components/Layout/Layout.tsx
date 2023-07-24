import React, { ReactElement } from 'react';
import { Footer } from '@/components/footer';
import { copyRightList, footerNavData } from '@/footerData';
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
      <Footer footerNavData={footerNavData} copyRightList={copyRightList} />
    </StyledLayout>
  );
};
