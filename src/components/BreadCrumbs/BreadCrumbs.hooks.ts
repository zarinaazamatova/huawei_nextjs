import { useRouter } from 'next/router';

export const useBreadCrumbsPath = (): string[] => {
  const { pathname } = useRouter();
  const currentPath = `/${pathname}`.split(/(?=\/)/).slice(0, -1);
  const pathArray = currentPath.reduce((acc: string[], curr: string, index: number) => {
    const cumulativePath = index <= 1 ? curr : `${acc[index - 1]}${curr}`;
    return [...acc, cumulativePath];
  }, []);
  return pathArray;
};
