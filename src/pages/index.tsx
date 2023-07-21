import { Layout } from '@/components/Layout';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';
import { ContactUsWidget } from '@/components/ContactUsWidget';
import { YouTubeIcon, VKIcon, AppStoreIcon } from '../../public/assets/svg';

const contactOptions = [
  {
    name: <YouTubeIcon width="18" height="12" fill="white" />,
    alt: 'YouTube',
    id: 0,
    url: 'https://www.youtube.com',
  },
  {
    name: <VKIcon width="18" height="12" fill="white" />,
    alt: 'ВКонтакте',
    id: 1,
    url: 'https://vk.com',
  },
  {
    name: <AppStoreIcon width="18" height="12" />,
    alt: 'Оплатить',
    id: 2,
    url: 'https://www.apple.com',
  },
];

const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <News />
          <SimpleSlider />
        </div>
      </Layout>
      <ContactUsWidget options={contactOptions} />
    </>
  );
};

export default Home;
