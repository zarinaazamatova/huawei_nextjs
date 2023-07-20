import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { Form } from './Form';

describe('Form', () => {
  it('should render form elements', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Form
          labelText="testLabelText"
          inputType="testInputType"
          placeHolder="testPlaceHolderText"
          id="testId"
          buttonContent="testButton"
          onSubmit={() => {}}
        />
      </ThemeProvider>,
    );
    const labelElement = screen.getByText('testLabelText');
    const inputElement = screen.getByPlaceholderText('testPlaceHolderText');
    const buttonElement = screen.getByText('testButton');

    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('should submit the form with the correct input value', async () => {
    const onSubmitMock = jest.fn();
    render(
      <ThemeProvider theme={defaultTheme}>
        <Form
          labelText="testLabelText"
          inputType="testInputType"
          placeHolder="testPlaceHolderText"
          id="testId"
          buttonContent="testButton"
          onSubmit={onSubmitMock}
        />
      </ThemeProvider>,
    );
    const inputElement = screen.getByPlaceholderText('testPlaceHolderText') as HTMLInputElement;
    const buttonElement = screen.getByText('testButton');

    await userEvent.type(inputElement, 'test value');
    await userEvent.click(buttonElement);

    expect(inputElement).toHaveValue('test value');
    expect(onSubmitMock).toHaveBeenCalledWith('test value');
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
