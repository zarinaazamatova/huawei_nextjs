import { render, screen } from '@testing-library/react';
import { List } from './List';

describe('List component', () => {
  it('renders correctly', () => {
    const listData = [
      {
        name: 'List item 1',
        url: 'link to list item 1',
      },
    ];
    render(<List listData={listData} />);

    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    const linkElements = screen.getAllByRole('link');

    expect(listElement).toBeInTheDocument();
    expect(listItems).toHaveLength(listData.length);
    expect(linkElements).toHaveLength(listData.length);
    expect(linkElements[0]).toHaveTextContent(listData[0].name);
    expect(linkElements[0]).toHaveAttribute('href', listData[0].url);
    expect(listItems[0]).toContainElement(linkElements[0]);
  });
});
