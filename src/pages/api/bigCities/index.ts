import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const bigCities = [
    {
      id: 1,
      name: 'Москва',
    },
    {
      id: 2,
      name: 'Санкт-Петербург',
    },
    {
      id: 3,
      name: 'Владимир',
    },
    {
      id: 4,
      name: 'Калуга',
    },
    {
      id: 5,
      name: 'Липецк',
    },
    {
      id: 6,
      name: 'Ковров',
    },
    {
      id: 7,
      name: 'Тюмень',
    },
    {
      id: 8,
      name: 'Белгород',
    },
    {
      id: 9,
      name: 'Обнинск',
    },
    {
      id: 10,
      name: 'Рязань',
    },
    {
      id: 11,
      name: 'Челябинск',
    },
    {
      id: 12,
      name: 'Волгоград',
    },
    {
      id: 13,
      name: 'Казань',
    },
    {
      id: 14,
      name: 'Новомосковск',
    },
    {
      id: 15,
      name: 'Омск',
    },
    {
      id: 16,
      name: 'Самара',
    },
    {
      id: 17,
      name: 'Саратов',
    },
    {
      id: 18,
      name: 'Ярославль',
    },
    {
      id: 19,
      name: 'Воронеж',
    },
    {
      id: 20,
      name: 'Кострома',
    },
    {
      id: 21,
      name: 'Н.Новгород',
    },
    {
      id: 22,
      name: 'Ростов-на-Дону',
    },
    {
      id: 23,
      name: 'Екатеринбург',
    },
    {
      id: 24,
      name: 'Краснодар',
    },
    {
      id: 25,
      name: 'Орёл',
    },
    {
      id: 26,
      name: 'Тверь',
    },
    {
      id: 27,
      name: 'Иваново',
    },
    {
      id: 28,
      name: 'Красноярск',
    },
    {
      id: 29,
      name: 'Новосибирск',
    },
    {
      id: 30,
      name: 'Пермь',
    },
    {
      id: 31,
      name: 'Тула',
    },
    {
      id: 32,
      name: 'Курск',
    },
  ];
  res.status(200).json(bigCities);
}
