import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import * as api from './api';
import { News } from './News';

jest.mock('./api', () => {
  return { __esModule: true, getData: () => Promise.resolve([{ id: '1', title: 'test' }]) };
});
//const mockedApi = api as jest.Mocked<typeof api>;

describe('<News />', () => {
  beforeEach(() => jest.clearAllMocks());
  it('should render news when api respond', async () => {
   // mockedApi.getData.mockResolvedValue({
   //   news: [{ title: 'Вопрос-ответ: встреча с ветеринарным экспертом Четыре Лапы' }],
  //  });
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
