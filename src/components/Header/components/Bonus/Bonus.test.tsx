import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../../styles/theme';
import { Bonus } from './Bonus';

describe('Bonus', () => {
  it('should render component without errors', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Bonus />
      </ThemeProvider>,
    );
    expect(screen.getByText('Бесплатная доставка от 500 ₽')).toBeInTheDocument();
    expect(screen.getByText('Бонусная программа')).toBeInTheDocument();
    expect(screen.getByText('Мобильное приложение')).toBeInTheDocument();
  });
});
