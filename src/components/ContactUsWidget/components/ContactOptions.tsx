import { ContactOption } from './ContactOptions.types';
import {
  StyledContainer,
  StyledHeader,
  SttyledList,
  StyledLink,
  StyledImage,
} from './ContactOptions.style';

type ContactOptionsProps = {
  options: ContactOption[];
};

export const ContactOptions = ({ options }: ContactOptionsProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledHeader>Помощь специалиста</StyledHeader>
      <ul id="menu" role="menu">
        {options.map(({ id, url, name, alt }) => (
          <SttyledList key={id} role="presentation">
            <StyledLink role="menuitem" href={url} target="_blank" rel="noopener noreferrer">
              <StyledImage>{name}</StyledImage>
              <span>{alt}</span>
            </StyledLink>
          </SttyledList>
        ))}
      </ul>
    </StyledContainer>
  );
};
