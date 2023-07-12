import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from './api';
import { Pagination } from './Pagination';
import * as S from './News.styles';

export const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getData()
      .then((data) => setNews(data.news))
      .catch((e) => e);
  }, []);

  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  const dataPerPage = 16;
  const startIndex = currentPage * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = news.slice(startIndex, endIndex);

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
          {currentData.map((e: any) => (
            <S.StyledInfoBlocksItem>
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
        <Pagination
          pageCount={Math.ceil(news.length / dataPerPage)}
          onPageChange={handlePageChange}
          selectedPage={currentPage}
        />
      </div>
    </S.StyledNewsSection>
  );
};
