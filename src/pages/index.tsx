import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { productsData, ProductType } from '@/productsData';
import { ProductSlider } from '@/features/productsSlider';
import { Layout } from '../Layout';
import { Benefits } from '../Layout/Benefits';
import { News } from '../components/News';
import { SimpleSlider } from '../components/SimpleSlider';
import { ContactUsWidget } from '../components/ContactUsWidget';
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

type HomeProps = {
  products: ProductType[];
  country: string | null;
};

const Home = ({ products, country }: HomeProps): ReactElement => {
  console.log(country, 'ggggg');
  return (
    <Layout country={country}>
      <div>
        <ProductSlider products={products} />
        <News />
        <SimpleSlider />
        <Benefits />
        <ContactUsWidget options={contactOptions} />
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const products = productsData;
    const response = await fetch('http://localhost:3000/api/countryDetection');
    const data = await response.json();
    return {
      props: {
        products,
        country: data.country,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
        country: 'not found',
      },
    };
  }
};
