import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import { ContactOptions } from './components/ContactOptions';
import { ClosedContainer, OpenedContainer, StyledContainer } from './ContactUsWidget.styles';
import { ContactOption } from './components/ContactOptions.types';
import { SocialButton, XIcon } from '../../../public/assets/svg';

type ContactUsWidgetProps = {
  options: ContactOption[];
};

export const ContactUsWidget = ({ options }: ContactUsWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledContainer onClick={toggleWidget}>
        {isOpen ? (
          <OpenedContainer>
            <XIcon width="60px" height="60px" fill="#fe5000" />
          </OpenedContainer>
        ) : (
          <ClosedContainer>
            <SocialButton width="50px" height="50px" fill="white" stroke="#fe5000" />
          </ClosedContainer>
        )}
        {isOpen && <ContactOptions options={options} />}
      </StyledContainer>
    </ThemeProvider>
  );
};
React.memo(ContactUsWidget);
