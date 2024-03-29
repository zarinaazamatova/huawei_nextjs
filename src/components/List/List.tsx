import { JSX } from 'react';
import Link from 'next/link';
import { StyledList } from './List.styles';

type ListItem = {
  name: string | JSX.Element;
  url: string;
};

type ListProps = {
  listData: ListItem[];
};

export const List = ({ listData }: ListProps): JSX.Element => {
  return (
    <StyledList>
      {listData.map(({ name, url }) => {
        return (
          <li key={url}>
            <Link href={url}>{name}</Link>
          </li>
        );
      })}
    </StyledList>
  );
};
