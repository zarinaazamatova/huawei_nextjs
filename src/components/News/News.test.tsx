import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { News } from './News';

jest.mock('./api', () => {
  return {
    __esModule: true,
    fetchNews: () => Promise.resolve([{ id: '1', title: 'test', img: '/test' }]),
  };
});

describe('<News />', () => {
  beforeEach(() => jest.clearAllMocks());
  it('should render news when api respond', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <News />
      </ThemeProvider>,
    );
    expect(
      screen.getByText(
        'Новости Четыре Лапы: мероприятия, открытие новых магазинов, новинки в ассортименте',
      ),
    ).toBeInTheDocument();
    expect(await screen.findByText('test')).toBeInTheDocument();
  });
});
