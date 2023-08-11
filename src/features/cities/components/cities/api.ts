import axios from 'axios';
import { CitiesItem } from './Cities.types';

export const fetchCities = async (activeTab: string): Promise<CitiesItem[]> => {
  const res = await axios.get(`http://localhost:3000/api/${activeTab}`);
  return res.data;
};
