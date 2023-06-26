import styled from 'styled-components';
export const FooterContainer = styled.footer`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  color: ${({ theme }) => theme.colors.primary};
 
`;
export const SocialLinksBar = styled.div`
height: 40px;
background-color: ${({theme}) => theme.colors.green};
`