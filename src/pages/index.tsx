import React from 'react';
import { GetServerSideProps } from 'next';
import { productsData, ProductType } from '@/productsData';
import { Layout } from '@/components/Layout';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';
import { Slider } from '@/features/sliderForProducts';

type MyProducts = {
  products: ProductType[];
};

const Home: React.FC<MyProducts> = ({ products }) => {
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

export const getServerSideProps: GetServerSideProps<MyProducts> = async () => {
  try {
    const products = productsData;
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
      },
    };
  }
};
