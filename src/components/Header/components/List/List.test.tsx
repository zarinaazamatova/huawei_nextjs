import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../../styles/theme';
import { List } from './List';

jest.mock('../../../../assets/chevronDown.png', () => {
  return { __esModule: true, default: () => <div /> };
});

describe('<Header />', () => {
  it('should render expected elements', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <List />
      </ThemeProvider>,
    );

    expect(screen.getByText('Кошки')).toBeInTheDocument();
    expect(screen.getByText('Собаки')).toBeInTheDocument();
    expect(screen.getByText('Другие питомцы')).toBeInTheDocument();
    expect(screen.getByText('Пет сервисы')).toBeInTheDocument();
    expect(screen.getByText('Акции')).toBeInTheDocument();
    expect(screen.getByText('Ветаптека')).toBeInTheDocument();
    expect(screen.getByText('Новинки')).toBeInTheDocument();
    expect(screen.getByText('Бренды')).toBeInTheDocument();
    expect(screen.getByText('Магазины')).toBeInTheDocument();
    expect(screen.getByText('Защита от паразитов')).toBeInTheDocument();
    expect(screen.getByText('Доставка от 1 часа')).toBeInTheDocument();
  });
});
