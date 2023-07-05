import Image from "next/image";
import Form from '../form/Form';
import List from '../list/List';
import { StyledFooterContainer, StyledSocialLinksBar, StyledFooterContent,StyledFooterNavSection, StyledLinksSection, StyledFormWrapper, StyledCopyrightBar } from "./Footer.styles";
import { TelegramIcon, YouTubeIcon, TikTokIcon, VKIcon, OKIcon, AppStoreIcon, GooglePlayIcon, CheckMarkIcon } from '../../../public/assets/svg-files'
import { yandex, visaCard, masterCard, mirCard } from '../../../public/assets/png-files';

const iconList = [
        { name: <TikTokIcon width='16' height='18' fill='white' />, url: 'https://www.tiktok.com/@4lapyru' },
        { name: <YouTubeIcon width='18' height='12' fill='white' />, url: 'https://www.youtube.com/channel/UCduvxcmOQFwTewukh9DUpvQ' },
        { name: <TelegramIcon width='16' height='15' fill='white' />, url: 'https://t.me/zoo_4lapy' },
        { name: <VKIcon width='18' height='12' fill='white' />, url: 'https://vk.com/4lapy_ru' },
        { name: <OKIcon width='12' height='19' fill='white' />, url: 'https://ok.ru/chetyre.lapy' }
    ]

type FooterNavItem = {
    navHeader: string;
    navContent: {name: string; url: string}[]
}
type footerNavProps = FooterNavItem[]

type CopyrightItem  = {
  name: string;
  url: string;
}
type CopyRightListProps = CopyrightItem[]


const Footer = ({footerNavData, copyRightList} : {footerNavData: footerNavProps, copyRightList: CopyRightListProps}) => {

    const onSubmitForm = (string:string) => {
        console.log(string)
    }
   
    return (
        <StyledFooterContainer>

            <StyledSocialLinksBar>
                    <List listData={iconList}/>
            </StyledSocialLinksBar>

            <StyledFooterContent>
                <StyledFooterNavSection>
                    <div className="footer-nav-wrapper" >
                    {
                        footerNavData.map((item: FooterNavItem, index) => {
                            return(
                                    <div key={index}>
                                    <div className="nav-list-name">{item.navHeader}</div>
                                    <List listData={item.navContent}/>
                                    </div>
                            )
                        })
                    }
                    </div>

                <StyledFormWrapper>
                    <Form inputType="email" placeHolder='Адрес эл. почты' id='subscription' buttonContent={<CheckMarkIcon width="16px" height="16px" fill="lightgray"/>} onSubmit={onSubmitForm} labelText="Получайте рекомендации и выгодные предложения на почту"/>
                </StyledFormWrapper>

                <StyledCopyrightBar>
                        <List listData={copyRightList}/>
                </StyledCopyrightBar>

                </StyledFooterNavSection>

                    <StyledLinksSection>
                        <div className="mobile-app-wrapper">
                            <p className="wrapper-title">Наши приложения</p>
                            <div className="mobile-app-icons">
                                <a href="https://itunes.apple.com/us/app/%D1%87%D0%B5%D1%82%D1%8B%D1%80%D0%B5-%D0%BB%D0%B0%D0%BF%D1%8B-%D0%B7%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1222315361" target="_blank"><AppStoreIcon width='119.6' height='40' /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.appteka.lapy" target="_blank"><GooglePlayIcon height="40.3" width="136.4"/></a>
                            </div>
                        </div>
                        <div className="yandex-rating-wrapper">
                            <p className="wrapper-title">Наш рейтинг на Яндекс.Маркет</p>
                            <div className="yandex-rating-icon">
                                <a href="https://market.yandex.ru/shop--chetyre-lapy/155471/reviews" target="_blank"><Image src={yandex} alt="yandex-logo"/></a>
                            </div>
                        </div>
                        <div className="payment-options-wrapper">
                            <p className="wrapper-title">Способы оплаты</p>
                            <div className="payment-options-icons">
                                <a href="#"><Image src={visaCard} alt="visa-card-logo"/></a>
                                <a href="#"><Image src={masterCard} alt="master-card-logo"/></a>
                                <a href="#"><Image src={mirCard} alt="mir-card-logo"/></a>
                            </div>
                        </div>
                    </StyledLinksSection>
             
            </StyledFooterContent>
            </StyledFooterContainer>
        
    )
}

export default Footer;