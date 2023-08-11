import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { productsData, ProductType } from '@/productsData';
import { Layout } from '@/components/Layout';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';
import { Slider } from '@/features/productsSlider';

type SliderProps = {
  products: ProductType[];
};

const Home = ({ products }: SliderProps): ReactElement => {
  return (
    <Layout>
      <div>
        <Slider products={products} />
        <News />
        <SimpleSlider />
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
