export type News = {
  id: number;
  title: string;
  category: string;
  date: string;
  img: string;
  desc: string;
  address?: string;
  latitude?: number;
  longitude?: number;
};
