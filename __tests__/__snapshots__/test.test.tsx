import React from 'react';
import { render, screen } from '@testing-library/react';

describe('mock test for React component', () => {
  it('should have in document', () => {
    render(<h1>Hello world </h1>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
