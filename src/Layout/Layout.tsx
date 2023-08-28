import React, { ReactElement } from 'react';
import { Footer } from '@/components/footer';
import { copyRightList, footerNavData } from '@/footerData';
import { StyledLayout } from './Layout.styles';
import { Header } from '../components/Header';

type LayoutProps = {
  children: ReactElement;
  country: string | null;
};

export const Layout = ({ children, country }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header country={country} />
      {children}
      <Footer footerNavData={footerNavData} copyRightList={copyRightList} />
    </StyledLayout>
  );
};
