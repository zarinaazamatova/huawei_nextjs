import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Modal } from './city';

describe('<Modal />', () => {
  it('should render modal window', () => {
    const onClose = jest.fn();
    const onOpenCities = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <Modal isOpen onClose={onClose} onOpenCities={onOpenCities} />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Ваш город/i)).toBeInTheDocument();
    expect(screen.getByText('Да')).toBeInTheDocument();
    expect(screen.getByText('Нет, выбрать другой')).toBeInTheDocument();
  });
});
