import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Accordion } from './Accordion';

const mockSections = [
  {
    id: 1,
    icon: <div>Icon 1</div>,
    title: 'Сaption 1',
    description: 'Title 1',
    content: <div>Content 1</div>,
  },
  {
    id: 2,
    icon: <div>Icon 2</div>,
    title: 'Сaption 2',
    description: 'Title 2',
    content: <div>Content 2</div>,
  },
];

describe('Accordion', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion sections={mockSections} />
      </ThemeProvider>,
    );
  });

  it('should correct opening and closing of sections', async () => {
    const { getByText, queryByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion sections={mockSections} />
      </ThemeProvider>,
    );

    await userEvent.click(getByText('Title 1'));
    expect(getByText('Content 1')).toBeInTheDocument();

    await userEvent.click(getByText('Title 1'));
    expect(queryByText('Content 2')).toBeNull();

    await userEvent.click(getByText('Title 2'));
    expect(getByText('Content 2')).toBeInTheDocument();

    await userEvent.click(getByText('Title 2'));
    expect(queryByText('Content 1')).toBeNull();
  });
});
