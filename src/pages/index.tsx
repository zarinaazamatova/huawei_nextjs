import { Layout } from '../components/Layout';
import { News } from '../components/News';
import { SimpleSlider } from '../components/SimpleSlider';
import { ContactUsWidget } from '../components/ContactUsWidget';
import { GoogleMapComponent } from '../components/GoogleMap';
import { YouTubeIcon, VKIcon, OKIcon, TikTokIcon, TelegramIcon } from '../../public/assets/svg';

const contactOptions = [
  {
    name: <YouTubeIcon width="18" height="18" fill="red" />,
    alt: 'YouTube',
    id: 0,
    url: 'https://www.youtube.com',
  },
  {
    name: <VKIcon width="18" height="18" fill="blue" />,
    alt: 'ВКонтакте',
    id: 1,
    url: 'https://vk.com',
  },
  {
    name: <OKIcon width="18" height="18" fill="orange" />,
    alt: 'Одноклассники',
    id: 1,
    url: 'https://vk.com',
  },
  {
    name: <TikTokIcon width="18" height="18" fill="black" />,
    alt: 'ТикТок',
    id: 1,
    url: 'https://vk.com',
  },
  {
    name: <TelegramIcon width="18" height="18" fill="darkblue" />,
    alt: 'Телеграм',
    id: 1,
    url: 'https://vk.com',
  },
];

const Home = () => {
  return (
    <Layout>
      <div>
        <News />
        <SimpleSlider />
        <GoogleMapComponent latitude={27.672932021393862} longitude={85.31184012689732} />
        <ContactUsWidget options={contactOptions} />
      </div>
    </Layout>
  );
};

export default Home;
