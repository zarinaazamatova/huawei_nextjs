import { News } from '../../types';
import {
  StyledBox,
  StyledHeading,
  StyledDate,
  StyledParagraph,
  StyledImage,
} from './SingleNews.style';

export const SingleNews = ({ id, title, date, category, desc, img }: News) => {
  return (
    <StyledBox key={id}>
      <StyledHeading>{title}</StyledHeading>
      <StyledDate>{date}</StyledDate>
      <StyledImage src={img} alt={category} width={0} height={0} sizes="100vw" />
      <StyledParagraph>{desc}</StyledParagraph>
    </StyledBox>
  );
};
