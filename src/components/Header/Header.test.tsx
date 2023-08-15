import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Header } from './Header';

jest.mock('../../assets/list.png', () => {
  return { __esModule: true, default: () => <div /> };
});
jest.mock('../../assets/chevronDown.png', () => {
  return { __esModule: true, default: () => <div /> };
});
jest.mock('../../assets/logo.svg', () => {
  return { __esModule: true, default: () => <div /> };
});
jest.mock('../../assets/user.png', () => {
  return { __esModule: true, default: () => <div /> };
});
jest.mock('../../assets/heart.png', () => {
  return { __esModule: true, default: () => <div /> };
});
jest.mock('../../assets/cart.png', () => {
  return { __esModule: true, default: () => <div /> };
});

describe('<Header />', () => {
  it('should render expected elements', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>,
    );

    expect(screen.getByText('Бесплатная доставка от 500 ₽')).toBeInTheDocument();
    expect(screen.getByText('Бонусная программа')).toBeInTheDocument();
    expect(screen.getByText('Мобильное приложение')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
    expect(screen.getByText('Войти')).toBeInTheDocument();
    expect(screen.getByText('Избранное')).toBeInTheDocument();
    expect(screen.getByText('Корзина')).toBeInTheDocument();
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
