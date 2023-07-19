import Link from 'next/link';
import { ContactOption } from './ContactOptions.types';

type ContactOptionsProps = {
  options: ContactOption[];
};

export const ContactOptions = ({ options }: ContactOptionsProps): JSX.Element => {
  return (
    <ul>
      {options.map(({ id, url, name, alt }) => (
        <li key={id}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
          <span>{alt}</span>
        </li>
      ))}
    </ul>
  );
};
