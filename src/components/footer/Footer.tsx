import Image from 'next/image';
import { Form } from '../Form';
import { List } from '../List';
import { InfoBlock } from './InfoBlock';
import {
  StyledFooterContainer,
  StyledSocialLinksBar,
  StyledFooterContent,
  StyledFooterNavSection,
  StyledLinksSection,
  StyledFormWrapper,
  StyledCopyrightBar,
  StyledFooterNavWrapper,
} from './Footer.styles';
import {
  TelegramIcon,
  YouTubeIcon,
  TikTokIcon,
  VKIcon,
  OKIcon,
  AppStoreIcon,
  GooglePlayIcon,
  CheckMarkIcon,
} from '../../../public/assets/svg-files';
import { yandex, visaCard, masterCard, mirCard } from '../../../public/assets/png-files';

const iconList = [
  {
    name: <TikTokIcon width="16" height="18" fill="white" />,
    url: 'https://www.tiktok.com/@4lapyru',
  },
  {
    name: <YouTubeIcon width="18" height="12" fill="white" />,
    url: 'https://www.youtube.com/channel/UCduvxcmOQFwTewukh9DUpvQ',
  },
  { name: <TelegramIcon width="16" height="15" fill="white" />, url: 'https://t.me/zoo_4lapy' },
  { name: <VKIcon width="18" height="12" fill="white" />, url: 'https://vk.com/4lapy_ru' },
  { name: <OKIcon width="12" height="19" fill="white" />, url: 'https://ok.ru/chetyre.lapy' },
];
const imageList = [
  {
    title: 'Наши приложения',
    content: [
      {
        image: <AppStoreIcon width="119.6" height="40" />,
        url: 'https://itunes.apple.com/us/app/%D1%87%D0%B5%D1%82%D1%8B%D1%80%D0%B5-%D0%BB%D0%B0%D0%BF%D1%8B-%D0%B7%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1222315361',
      },
      {
        image: <GooglePlayIcon height="40.3" width="136.4" />,
        url: 'https://play.google.com/store/apps/details?id=com.appteka.lapy',
      },
    ],
  },
  {
    title: 'Наш рейтинг на Яндекс.Маркет',
    content: [
      {
        image: <Image src={yandex} alt="yandex-logo" />,
        url: 'https://market.yandex.ru/shop--chetyre-lapy/155471/reviews',
      },
    ],
  },
  {
    title: 'Способы оплаты',
    content: [
      {
        image: <Image src={visaCard} alt="visa-card-logo" />,
        url: '',
      },
      {
        image: <Image src={masterCard} alt="master-card-logo" />,
        url: '',
      },
      {
        image: <Image src={mirCard} alt="mir-card-logo" />,
        url: '',
      },
    ],
  },
];

type FooterNavItem = {
  navHeader: string;
  navContent: { name: string; url: string }[];
};
type footerNavProps = FooterNavItem[];

type CopyrightItem = {
  name: string;
  url: string;
};
type CopyRightListProps = CopyrightItem[];

export const Footer = ({
  footerNavData,
  copyRightList,
}: {
  footerNavData: footerNavProps;
  copyRightList: CopyRightListProps;
}) => {
  console.log(TelegramIcon);
  const onSubmitForm = (string: string) => {
    console.log(string);
  };

  return (
    <StyledFooterContainer>
      <StyledSocialLinksBar>
        <List listData={iconList} />
      </StyledSocialLinksBar>

      <StyledFooterContent>
        <StyledFooterNavSection>
          <StyledFooterNavWrapper>
            {footerNavData.map((item: FooterNavItem, index) => {
              return (
                <div key={index}>
                  <div className="nav-list-name">{item.navHeader}</div>
                  <List listData={item.navContent} />
                </div>
              );
            })}
          </StyledFooterNavWrapper>
          <StyledFormWrapper>
            <Form
              inputType="email"
              placeHolder="Адрес эл. почты"
              id="subscription"
              buttonContent={<CheckMarkIcon width="16px" height="16px" fill="lightgray" />}
              onSubmit={onSubmitForm}
              labelText="Получайте рекомендации и выгодные предложения на почту"
            />
          </StyledFormWrapper>
          <StyledCopyrightBar>
            <List listData={copyRightList} />
          </StyledCopyrightBar>
        </StyledFooterNavSection>

        <StyledLinksSection>
          {imageList.map((item, index) => {
            return <InfoBlock {...item} key={index} />;
          })}
        </StyledLinksSection>
      </StyledFooterContent>
    </StyledFooterContainer>
  );
};

export default Footer;
