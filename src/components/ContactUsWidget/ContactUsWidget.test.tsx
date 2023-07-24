import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { ContactUsWidget } from './ContactUsWidget';

jest.mock('./components/ContactOptions', () => ({
  __esModule: true,
  ContactOptions: () => <div>Test List</div>,
}));

jest.mock('../../../public/assets/svg', () => ({
  YouTubeIcon: () => null,
  VKIcon: () => null,
  AppStoreIcon: () => null,
  OKIcon: () => null,
  TikTokIcon: () => null,
  XIcon: () => null,
  SocialButton: () => null,
}));

describe('ContactUsWidget', () => {
  it('renders text correctly', () => {
    const optionsContent = [
      {
        optionsHeader: 'testHeader',
        listContent: [
          {
            name: 'testName1',
            url: 'url to testName1',
            id: 1,
            alt: 'test',
          },
          {
            name: 'testName2',
            url: 'url to testName2',
            id: 2,
            alt: 'test2',
          },
        ],
      },
    ];
    render(
      <ThemeProvider theme={defaultTheme}>
        <ContactUsWidget optionsContent={optionsContent} />
      </ThemeProvider>,
    );
    // expect(screen.getByText('Contact Us')).toBeInTheDocument();
    // expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });

  it('should open list of elements on click event', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <ContactUsWidget options={optionsContent} />
      </ThemeProvider>,
    );
    const divElement = screen.getByText('Contact Us');
    await userEvent.click(divElement);
    // without anytext
    expect();
  });
});
