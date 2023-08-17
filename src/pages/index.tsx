import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { productsData, ProductType } from '@/productsData';
import { Layout } from '@/components/Layout';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';
import { ProductSlider } from '@/features/productsSlider';
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

type SliderProps = {
  products: ProductType[];
};

const Home = ({ products }: SliderProps): ReactElement => {
  return (
    <Layout>
      <div>
        <ProductSlider products={products} />
        <News />
        <SimpleSlider />
        <ContactUsWidget options={contactOptions} />
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<SliderProps> = async () => {
  try {
    const products = productsData;
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
};
