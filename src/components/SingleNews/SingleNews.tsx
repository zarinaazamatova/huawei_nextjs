import { News } from '../../types';
import {
  StyledBox,
  StyledHeading,
  StyledDate,
  StyledParagraph,
  StyledImage,
} from './SingleNews.style';
import { GoogleMapComponent } from '../GoogleMap';

export const SingleNews = ({
  id,
  title,
  date,
  category,
  address,
  desc,
  img,
  latitude,
  longitude,
}: News) => {
  return (
    <StyledBox key={id}>
      <StyledHeading>{title}</StyledHeading>
      <StyledDate>{date}</StyledDate>
      <StyledImage src={img} alt={category} width={0} height={0} sizes="100vw" />
      <StyledParagraph>{desc}</StyledParagraph>
      <StyledParagraph>{address}</StyledParagraph>
      {latitude && longitude && <GoogleMapComponent latitude={latitude} longitude={longitude} />}
    </StyledBox>
  );
};
