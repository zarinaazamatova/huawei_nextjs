import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Benefits } from './Benefits';

describe('Benefits', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Benefits />
      </ThemeProvider>,
    );

    expect(screen.getByText('Почему выбирают зоомагазин «Четыре Лапы»?')).toBeInTheDocument();
    expect(screen.getByText('4lapy.ru')).toBeInTheDocument();
  });
});
