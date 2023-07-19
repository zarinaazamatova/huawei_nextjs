import { render, screen, fireEvent } from '@testing-library/react';
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
}));

describe('ContactUsWidget', () => {
  it('renders text correctly', () => {
    const optionsContent = [
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
        <ContactUsWidget options={optionsContent} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.queryByText('Close')).not.toBeInTheDocument();

    const contactUsContainer = screen.getByText('Contact Us');
    fireEvent.click(contactUsContainer);
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Youtube'));
    fireEvent.click(contactUsContainer);
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });
});
