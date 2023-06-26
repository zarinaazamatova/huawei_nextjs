import styled from 'styled-components';
import Footer from '@/components/footer/Footer';
const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};
`;

export default function Home() {
  return (
    <>
  <StyledH1>My page</StyledH1>
  <Footer/>
  </>
  );
}
