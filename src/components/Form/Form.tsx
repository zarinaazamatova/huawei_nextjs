import { ThemeProvider } from 'styled-components';
import { useState, FormEvent, ReactNode, JSX } from 'react';
import defaultTheme from '../../styles/theme';
import { StyledForm } from './Form.styles';

type FormProps = {
  labelText: string;
  inputType: string;
  placeHolder: string;
  id: string;
  buttonContent: ReactNode;
  onSubmit: (value: string) => void;
};
export const Form = ({
  labelText = '',
  inputType,
  placeHolder,
  id,
  buttonContent,
  onSubmit,
}: FormProps): JSX.Element => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledForm onSubmit={handleSubmit} aria-label="form">
        <label htmlFor={id}>{labelText}</label>
        <div className="input-container">
          <input
            id={id}
            placeholder={placeHolder}
            type={inputType}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <span>{buttonContent}</span>
          </button>
        </div>
      </StyledForm>
    </ThemeProvider>
  );
};
