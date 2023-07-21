import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Footer } from './Footer';

jest.mock('../List', () => ({
  __esModule: true,
  List: () => <div>Test List</div>,
}));

jest.mock('./InfoBlock', () => ({
  __esModule: true,
  InfoBlock: () => <div>Test Module</div>,
}));

jest.mock('../../../public/assets/svg', () => ({
  TikTokIcon: () => null,
  YouTubeIcon: () => null,
  TelegramIcon: () => null,
  VKIcon: () => null,
  OKIcon: () => null,
  AppStoreIcon: () => null,
  GooglePlayIcon: () => null,
  CheckMarkIcon: () => null,
}));

jest.mock('../../../public/assets/png', () => ({
  yandex: () => null,
  visaCard: () => null,
  masterCard: () => null,
  mirCard: () => null,
}));

describe('Footer', () => {
  it('should render prop data correctly', () => {
    const footerNavData = [
      {
        navHeader: 'testHeader',
        navContent: [
          {
            name: 'testName1',
            url: 'url to testName1',
          },
          {
            name: 'testName2',
            url: 'url to testName1',
          },
        ],
      },
    ];
    const copyRightList = [{ name: 'copyRight1', url: 'url to copyRight1' }];
    render(
      <ThemeProvider theme={defaultTheme}>
        <Footer footerNavData={footerNavData} copyRightList={copyRightList} />
      </ThemeProvider>,
    );

    expect(screen.getAllByText('Test List')).toHaveLength(3);
    expect(screen.getByText('testHeader')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByText('Test Module')).toHaveLength(3);
  });
});
