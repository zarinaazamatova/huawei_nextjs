import { Layout } from '@/components/Layout';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';

const Home = () => {
  return (
    <Layout>
      <div>
        <News />
        <SimpleSlider />
      </div>
    </Layout>
  );
};

export default Home;
