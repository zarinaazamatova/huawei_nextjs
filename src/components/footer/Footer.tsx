import { FooterContainer, SocialLinksBar } from "./Footer.styles";
// import tiktok from '../../assets/icons/tiktok.png'
const Footer = () => {
    const path = '../../assets/icons/tiktok.png'
    return (
        <FooterContainer>
            <SocialLinksBar>
                <img src={path}/>
            </SocialLinksBar>
            Styled footer container</FooterContainer>
        
    )
}

export default Footer;