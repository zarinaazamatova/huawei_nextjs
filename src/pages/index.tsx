import { Slider } from '@/components/Slider';
import { Layout } from '@/components/Layout';
import { News } from '@/components/News';

const Home = () => {
  return (
    <Layout>
      <div>
        <News />
        <Slider />
      </div>
    </Layout>
  );
};

export default Home;
