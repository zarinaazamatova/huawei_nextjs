import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { StyledBreadCrumbsList, StyledBreadCrumbsItem } from './BreadCrumbs.styles';
import { ArrowIcon } from '../../../public/assets/svgs/ArrowIcon';
import { breadCrumbsData } from './BreadCrumbsData';

export const BreadCrumbs = () => {
  const { pathname } = useRouter();
  const currentPath = `/${pathname}`.split(/(?=\/)/).slice(0, -1);
  const cumulativePathsArray = currentPath.reduce((acc: string[], curr: string, index: number) => {
    const cumulativePath = index <= 1 ? curr : `${acc[index - 1]}${curr}`;
    return [...acc, cumulativePath];
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledBreadCrumbsList>
        {cumulativePathsArray.map((pathSegment, index) => {
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
