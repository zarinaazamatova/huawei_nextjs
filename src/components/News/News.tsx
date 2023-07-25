import React, { useState, useEffect, ReactElement } from 'react';
import Image from 'next/image';
import { Pagination } from './Pagination';
import * as S from './News.styles';
import { fetchNews } from './api';
import { NewsItem } from './News.types';
import { NEWS_TOTAL, DEFAULT_NEWS_PER_PAGE } from './News.constant';

export const News: React.FC = (): ReactElement => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize: number = DEFAULT_NEWS_PER_PAGE;
  const totalNews: number = NEWS_TOTAL;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const data = await fetchNews(currentPage, pageSize);
        setNews(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }
    fetchData();
  }, [currentPage, pageSize]);

  const handlePageChange = (selected: { selected: number }): void => {
    setCurrentPage(selected.selected);
  };

  return (
    <S.StyledNewsSection>
      <S.StyledMainPageLink>
        <S.StyledLink href="./">Главная</S.StyledLink>
      </S.StyledMainPageLink>
      <S.StyledH1>
        Новости Четыре Лапы: мероприятия, открытие новых магазинов, новинки в ассортименте
      </S.StyledH1>
      <div>
        <S.StyledInfoBlocks>
          {news.map(({ id, img, category, title, date }) => (
            <S.StyledInfoBlocksItem key={id}>
              <S.StyledInfoBlocksItemLink>
                <Image alt="event" src={img} width={290} height={160} />
                <S.StyledInfoBlocksSnippet>
                  {category === 'event' ? 'Мероприятия' : 'Новые магазины'}
                </S.StyledInfoBlocksSnippet>
                <S.StyledInfoBlocksItemTitle key={id}>{title}</S.StyledInfoBlocksItemTitle>
                <S.StyledInfoBlocksItemDate>{date}</S.StyledInfoBlocksItemDate>
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
