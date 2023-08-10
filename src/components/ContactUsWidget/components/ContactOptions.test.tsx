import { render, screen } from '@testing-library/react';
import { ContactOptions } from './ContactOptions';

describe('ContactOptions Component', () => {
  it('should render the list of contact options', () => {
    const testOptions = [
      {
        id: 1,
        url: 'https://www.example.com',
        name: '<svg>Mock Icon</svg>',
        alt: 'Test Icon',
      },
    ];
    render(<ContactOptions options={testOptions} />);

    const heading = screen.getByRole('heading', { name: 'Помощь специалиста' });
    expect(heading).toBeInTheDocument();

    const listItems = screen.getByRole('menu');
    expect(listItems).toBeInTheDocument();

    const item = screen.getByRole('presentation');
    expect(item).toBeInTheDocument();

    const link = screen.getByRole('menuitem');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
