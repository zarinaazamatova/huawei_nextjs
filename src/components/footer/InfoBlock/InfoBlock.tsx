import { JSX } from 'react';
import Link from 'next/link';
import { StyledInfoBlockWrapper } from './InfoBlock.styles';

type InfoBlockProps = {
  title: string;
  content: { image: JSX.Element; url: string }[];
};
export const InfoBlock = ({ title, content }: InfoBlockProps): JSX.Element => {
  return (
    <StyledInfoBlockWrapper>
      <p>{title}</p>
      <div>
        {content.map(({ image, url }) => {
          return (
            <Link href={url} key={url}>
              {image}
            </Link>
          );
        })}
      </div>
    </StyledInfoBlockWrapper>
  );
};
