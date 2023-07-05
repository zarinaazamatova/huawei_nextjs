import styled from 'styled-components';
import {Footer} from '../components/Footer';
import { footerNavData, copyRightList } from '../footerData'
const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColors.accent};
`;

export default function Home() {
  return (
    <>
  <StyledH1>My page</StyledH1>
  <Footer footerNavData={footerNavData} copyRightList = {copyRightList}/>
  </>
  );
}
