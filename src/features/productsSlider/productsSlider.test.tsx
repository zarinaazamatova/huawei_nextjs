import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ProductType } from '../../productsData';
import defaultTheme from '../../styles/theme';
import { Slider } from './productsSlider';

jest.mock('react-slick', () => ({
  default: () => {
    return <div />;
  },
  __esModule: true,
}));

jest.mock('./productsSlider', () => ({
  Slider: ({ products }: { products: ProductType[] }) => (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  ),
}));

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
  {
    id: 2,
    name: 'Product 2',
    description: 'test',
    img: 'test',
    rating: 1,
    comment: 1,
    weight: '1',
    amount: 1,
  },
];

describe('Slider', () => {
  it('renders the Slider component with products', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Slider products={mockProducts} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});
