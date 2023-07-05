import styled, { css }  from 'styled-components';
export const StyledFooterContainer = styled.footer`
  font-family: ${({ theme }) => theme.fontFamily.roboto[1]};
  
`;
export const StyledSocialLinksBar = styled.section`
  height: 60px;
  background-color: ${({theme}) => theme.bgColors.green};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 120px;
  ul{
    display: flex;
      li{
        padding-left: 25px;
      }
  }
  @media (max-width: ${({theme})=> theme.screens.m}) {
    justify-content: flex-start;
  }
`

export const StyledFooterContent = styled.section`
  background-color: ${({theme}) => theme.bgColors.secondary};
  padding: 30px  120px 80px;
  display: flex;
  gap: 100px;
  position: relative;
  @media (max-width: ${({theme})=> theme.screens.l}) {
    flex-direction: column;
    padding: 30px 30px;
    gap: 20px;
  }

`
export const StyledFooterNavSection = styled.section`
  div.footer-nav-wrapper{
    display: flex;
    gap: 20px;
    li{
      color: ${({theme}) => theme.textColors.secondary};
        font-size: ${({theme}) => theme.fontSizes.base};
        line-height: ${({theme}) => theme.spacing['4']};
        padding-right: 10px;
        }
  }
  div.nav-list-name {
    text-transform: uppercase;
    color: ${({theme}) => theme.textColors.orange};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.fontSizes.sm};
  }
@media (max-width: ${({theme})=> theme.screens.l}) {
  flex-direction: column;
}
@media (max-width: ${({theme})=> theme.screens.m}) {
  div.footer-nav-wrapper {
    flex-direction: column;
     gap: 5px;
      li{
        display: none;
      }
    }}
`


export const StyledFormWrapper = styled.section`

  position: absolute; 
  top: 350px;
  left: 350px;
   label{
    display: block;
    color: ${({theme}) => theme.textColors.secondary};
    font-size: ${({theme}) => theme.fontSizes.sm};
    margin-bottom: 10px;
  }
  @media (max-width: ${({theme})=> theme.screens.l}) {
    position: static;
    width: 60%;
    margin-bottom: 30px;
}
`


export const StyledLinksSection = styled.section`

  color: ${({theme}) => theme.textColors.secondary};
          font-size: ${({theme}) => theme.fontSizes.base};
  .mobile-app-wrapper, .yandex-rating-wrapper, .payment-options-wrapper {
    margin-bottom: 30px;;
  }
  .mobile-app-wrapper .mobile-app-icons{
    display: flex;
  }
  .yandex-rating-wrapper img{
    width: 250px;
    height: 55px;
  }
  .payment-options-wrapper a{
      display: inline-block;
      margin-right: 10px;
  }

  p.wrapper-title{
    margin-top: 0;
  }
  @media (max-width: ${({theme})=> theme.screens.l}) {
    display: flex;
    gap: 20px;
.yandex-rating-wrapper img{
    width: 200px;
    height: 50px;
  }
  @media (max-width: ${({theme})=> theme.screens.m}) {
    .yandex-rating-wrapper, .payment-options-wrapper{
      display: none;
    }
  }
  }
`
export const  StyledCopyrightBar = styled.section`
position: absolute;
top: 420px;
width: 100%;
  ul{
  display: flex;
    a{
    color: ${({theme}) => theme.textColors.secondary};
    font-size: ${({theme}) => theme.fontSizes.base};
    white-space: nowrap;
    margin-right: 20px;
  }
  }

@media (max-width: ${({theme})=> theme.screens.l}) {
  top: 580px;
}
@media (max-width: ${({theme})=> theme.screens.m}) {
  top: 380px;
  ul{
    flex-direction: column;
    li{
      margin-bottom: 10px;
    }
  }
}
`

