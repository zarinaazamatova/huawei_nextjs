import React, { ReactElement } from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { StyledBreadCrumbsList, StyledBreadCrumbsItem } from './BreadCrumbs.styles';
import { ArrowIcon } from '../../../public/assets/svgs/ArrowIcon';
import { breadCrumbsData } from './BreadCrumbs.constants';
import { useBreadCrumbsPath } from './BreadCrumbs.hooks';

export const BreadCrumbs = (): ReactElement => {
  const pathsArray = useBreadCrumbsPath();

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledBreadCrumbsList>
        {pathsArray.map((pathSegment: string, index: number) => {
          const isHomePage = index === 0;

          return (
            <StyledBreadCrumbsItem key={index}>
              {!isHomePage && (
                <ArrowIcon
                  width={21}
                  height={21}
                  fill="darkgray"
                  stroke="none"
                  id={String(index)}
                  className="url arrow"
                />
              )}
              <Link href={isHomePage ? 'http://localhost:3000/' : pathSegment} key={index}>
                <span>{breadCrumbsData[isHomePage ? '/' : pathSegment]}</span>
              </Link>
            </StyledBreadCrumbsItem>
          );
        })}
      </StyledBreadCrumbsList>
    </ThemeProvider>
  );
};
