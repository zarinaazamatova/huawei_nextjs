import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductType } from '@/productsData';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Card } from './Card';

jest.mock('../../assets/cart.png', () => {
  return { __esModule: true, default: () => <div> test </div> };
});

jest.mock('next/image', () => {
  return { __esModule: true, default: () => <div /> };
});

const mockProducts: ProductType[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'test',
    img: 'test',
    rating: 1,
    comment: 1,
    weight: '1',
    amount: 1,
  },
];

describe('Card', () => {
  it('should render expected elements', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Card product={mockProducts[0]} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('⭐️⭐️⭐️⭐️⭐️')).toBeInTheDocument();
    expect(screen.getByText('(1)')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1 ₽')).toBeInTheDocument();
  });
});
