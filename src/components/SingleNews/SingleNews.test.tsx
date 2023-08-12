import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { SingleNews } from './SingleNews';

describe('SingleNews component', () => {
  const newsItem = {
    id: 1,
    title: 'News',
    date: '2023-07-22',
    category: 'Category',
    desc: 'This is a sample of the news description.',
    img: 'sample.jpg',
  };

  it('renders news item correctly', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <SingleNews {...newsItem} />
      </ThemeProvider>,
    );
    const headings = screen.getAllByRole('heading');
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('2023-07-22')).toBeInTheDocument();
    expect(
      await screen.findByText('This is a sample of the news description.'),
    ).toBeInTheDocument();
  });
});
