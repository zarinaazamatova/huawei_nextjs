import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from './Pagination';
import * as S from './News.styles';

export const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 16;
  const totalNews = 48;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/news?page=${currentPage}&pageSize=${pageSize}`,
        );
        const dataNews = await res.data;
        setNews(dataNews);
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
