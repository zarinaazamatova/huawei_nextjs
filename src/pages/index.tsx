import { Layout } from '@/components/Layout';
import { Benefits } from '@/components/Layout/Benefits';
import { News } from '@/components/News';
import { SimpleSlider } from '@/components/SimpleSlider';

const Home = () => {
  return (
    <Layout>
      <div>
        <News />
        <SimpleSlider />
        <Benefits />
      </div>
    </Layout>
  );
};

export default Home;
