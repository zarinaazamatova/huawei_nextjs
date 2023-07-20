import { Footer } from '../components/Footer';
import { footerNavData, copyRightList } from '../footerData'
import { Layout } from '@/components/Layout';
import { News } from '@/components/News';

const Home = () => {
  return (
    <Layout>
      <News />
      <Footer footerNavData={footerNavData} copyRightList = {copyRightList}/>
    </Layout>
  );
};

export default Home;
