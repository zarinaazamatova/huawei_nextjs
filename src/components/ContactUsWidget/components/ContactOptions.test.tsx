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

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(testOptions.length);

    testOptions.forEach((option) => {
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', option.url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    testOptions.forEach((option) => {
      const altText = screen.getByText(option.alt);
      expect(altText).toBeInTheDocument();
    });
  });
});
