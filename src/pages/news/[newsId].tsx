import { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import newsData from '../../mocks/news/news.json';
import { NewsProps } from './SingleNews.types';
import { Header } from '../../components/Header';
import {
  StyledContainer,
  StyledBox,
  StyledHeading,
  StyledDate,
  StyledParagraph,
} from './SingleNews.style';

const SingleNewsPage: NextPage<{ news: NewsProps[] }> = ({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <StyledContainer>
        {news.map((singleNews: any) => {
          return (
            <StyledBox key={singleNews.id}>
              <StyledHeading>{singleNews.title}</StyledHeading>
              <StyledDate>{singleNews.date}</StyledDate>
              <Image src={singleNews.img} alt={singleNews.category} width={700} height={700} />
              <StyledParagraph>{singleNews.desc}</StyledParagraph>
            </StyledBox>
          );
        })}
      </StyledContainer>
    </>
  );
};

export default SingleNewsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const newsId = params?.newsId;
  const newsItem = newsData.find((news: any) => news.id === Number(newsId));
  return {
    props: {
      news: newsItem ? [newsItem] : [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = newsData.map((singleNews: any) => {
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
