import axios from 'axios';
import { CitiesItem } from './Cities.types';

export const fetchCities = async (activeTab: string): Promise<CitiesItem[]> => {
  const res = await axios.get(`http://localhost:3000/api/${activeTab}`);
  return res.data;
};

/* import axios from 'axios';
import { NewsItem } from './News.types';

export const fetchNews = async (currentPage: number, pageSize: number): Promise<NewsItem[]> => {
  const res = await axios.get(
    `http://localhost:3000/api/news?page=${currentPage}&pageSize=${pageSize}`,
  );
  return res.data; moscowMO
}; */
