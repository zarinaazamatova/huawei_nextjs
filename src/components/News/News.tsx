import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from './Pagination';
import * as S from './News.styles';
import { fetchNews } from './api';
import { NewsItem } from './News.types';

export const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize: number = 16;
  const totalNews: number = 48;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchNews(currentPage, pageSize);
        setNews(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <S.StyledNewsSection>
      <S.StyledMainPageLink>
        <Link href="./" style={{ textDecoration: 'none', color: 'grey', fontSize: '12px' }}>
          Главная
        </Link>
      </S.StyledMainPageLink>
      <S.StyledH1>
        Новости Четыре Лапы: мероприятия, открытие новых магазинов, новинки в ассортименте
      </S.StyledH1>
      <div>
        <S.StyledInfoBlocks>
          {news.map((e: any) => (
            <S.StyledInfoBlocksItem key={e.id}>
              <S.StyledInfoBlocksItemLink>
                <Image alt="event" src={e.img} width={290} height={160} />
                <S.StyledInfoBlocksSnippet>
                  {e.category === 'event' ? 'Мероприятия' : 'Новые магазины'}
                </S.StyledInfoBlocksSnippet>
                <S.StyledInfoBlocksItemTitle key={e.id}>{e.title}</S.StyledInfoBlocksItemTitle>
                <S.StyledInfoBlocksItemDate>{e.date}</S.StyledInfoBlocksItemDate>
              </S.StyledInfoBlocksItemLink>
            </S.StyledInfoBlocksItem>
          ))}
        </S.StyledInfoBlocks>
        {news.length > 1 && (
          <Pagination
            pageCount={Math.ceil(totalNews / pageSize)}
            onPageChange={handlePageChange}
            selectedPage={currentPage}
          />
        )}
      </div>
    </S.StyledNewsSection>
  );
};
