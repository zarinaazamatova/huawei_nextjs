import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { BreadCrumbs } from './BreadCrumbs';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../public/assets/svg', () => ({
  ArrowIcon: () => null,
}));

jest.mock('./BreadCrumbsData', () => ({
  breadCrumbsData: {
    '/': 'Home',
    '/parent': 'Parent',
    '/parent/child': 'Child',
    '/parent/child/grandchild': 'Grandchild',
  },
}));

describe('Breadcrumbs', () => {
  it('should render links with correct path segments', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/parent/child/grandchild',
    });

    render(
      <ThemeProvider theme={defaultTheme}>
        <BreadCrumbs />,
      </ThemeProvider>,
    );

    const breadcrumbLinks = screen.getAllByRole('link');

    expect(breadcrumbLinks).toHaveLength(3);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.queryByText('Grandchild')).not.toBeInTheDocument();
  });
});
