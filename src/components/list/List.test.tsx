import { getAllByRole } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import { List } from './List';

describe('List component', () => {
  it('renders correctly', () => {
    const listData = [
      {
        name: 'List item 1',
        url: 'link to list item 1',
      },
      {
        name: 'List item 2',
        url: 'link to list item 2',
      },
      {
        name: 'List item 3',
        url: 'link to list item 3',
      },
    ];
    render(<List listData={listData} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toEqual(listData.length);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toEqual(listData.length);
    listData.forEach(({ name, url }, index) => {
      if (typeof name === 'string') {
        expect(linkElements[index]).toHaveTextContent(name);
      } else {
        expect(linkElements[index]).toContainElement(name);
      }
      expect(linkElements[index]).toHaveAttribute('href', url);
      expect(listItems[index]).toContainElement(linkElements[index]);
    });
  });
});
