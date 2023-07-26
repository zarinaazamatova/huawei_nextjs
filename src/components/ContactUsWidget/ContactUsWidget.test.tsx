import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import defaultTheme from '../../styles/theme';
import { ContactUsWidget } from './ContactUsWidget';

jest.mock('../../../public/assets/svg', () => ({
  YouTubeIcon: () => null,
  VKIcon: () => null,
  OKIcon: () => null,
  TikTokIcon: () => null,
  TelegramIcon: () => null,
  XIcon: () => null,
  SocialButton: () => null,
}));

describe('ContactUsWidget', () => {
  it('renders text correctly', async () => {
    const ContactOptions = [
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
    ];

    render(
      <ThemeProvider theme={defaultTheme}>
        <ContactUsWidget options={ContactOptions} />
      </ThemeProvider>,
    );

    expect(screen.queryByText('Помощь специалиста')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Помощь специалиста')).toBeInTheDocument();
  });
});
