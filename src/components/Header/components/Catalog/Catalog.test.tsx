import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../../styles/theme';
import { Catalog } from './Catalog';

jest.mock('../../../../assets/list.png', () => {
  return { __esModule: true, default: () => <div /> };
});
describe('Catalog', () => {
  it('test', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Catalog />
      </ThemeProvider>,
    );
    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
});
