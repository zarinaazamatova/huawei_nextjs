import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../../styles/theme';
import { Cities } from '.';

jest.mock('./api', () => {
  return {
    __esModule: true,
    fetchCities: () => Promise.resolve([{ id: '1', name: 'Москва' }]),
  };
});

jest.mock('../../../../assets/svg/geolacationIcon', () => {
  return { __esModule: true, default: () => <div /> };
});

describe('<City />', () => {
  it('should render modal window', async () => {
    const onCloseCities = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <Cities onCloseCities={onCloseCities} isOpenCities />
      </ThemeProvider>,
    );

    expect(await screen.findByText('Москва')).toBeInTheDocument();
    expect(screen.getByText('Москва и МО')).toBeInTheDocument();
    expect(screen.getByText('Большие города')).toBeInTheDocument();
  });
});
