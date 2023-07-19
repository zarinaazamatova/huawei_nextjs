import React, { useState } from 'react';
import { ContactOptions } from './components/ContactOptions';
import { StyledContainer } from './ContactUsWidget.styles';
import { ContactOption } from './components/ContactOptions.types';

type ContactUsWidgetProps = {
  options: ContactOption[];
};

export const ContactUsWidget = ({ options }: ContactUsWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledContainer onClick={toggleWidget}>
      {isOpen ? 'Close' : 'Contact Us'}
      {isOpen && <ContactOptions options={options} />}
    </StyledContainer>
  );
};
React.memo(ContactUsWidget);
