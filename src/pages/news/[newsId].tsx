import { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from 'next';
import newsData from '../../mocks/news/news.json';
import { Header } from '../../components/Header';
import { SingleNews } from '../../components/SingleNews';
import { SingleNewsPageProps } from '../../components/SingleNews/SingleNews.types';
import { News } from '../../types';
import { Footer } from '../../components/footer';
import { copyRightList, footerNavData } from '../../footerData';

const SingleNewsPage: NextPage<SingleNewsPageProps> = ({
  singleNews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <SingleNews {...singleNews} />
      <Footer footerNavData={footerNavData} copyRightList={copyRightList} />
    </>
  );
};

export default SingleNewsPage;

export const getStaticProps: GetStaticProps<SingleNewsPageProps> = async (context) => {
  const { params } = context;
  const newsId = params?.newsId;

  const newsItem = newsData.find((news: News) => news.id === Number(newsId));

  const props: SingleNewsPageProps = {
    singleNews: newsItem ?? ({} as News),
  };
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = newsData.map((singleNews: News) => {
    return {
      params: {
        newsId: `${singleNews.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
