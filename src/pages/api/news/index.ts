import { IncomingMessage, ServerResponse } from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const news = [
    {
      id: 1,
      title: 'День города Липецк вместе с Четыре Лапы',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/3cf/3cf28003e10aaa3002238869979e7de3.jpg',
      desc: '`abc`',
    },
    {
      id: 2,
      title: 'Вопрос-ответ: встреча с ветеринарным экспертом Четыре Лапы',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/877/8770198b74f736c6b6ef06aad673418c.jpg',
      desc: '`abc `',
    },
    {
      id: 3,
      title: 'Приглашаем на благотворительную ярмарку «Город неравнодушных»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/533/5332850376fc29e7194874fa9a21858d.jpg',
      desc: '`abc`',
    },
    {
      id: 4,
      title: 'Выездной прием врача-онколога',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/5c5/5c5cc3811ef722ebbca04e7b5014c13e.jpg',
      desc: '`abc `',
    },
    {
      id: 5,
      title: 'Приглашаем на выставку-пристройство благотворительного фонда «ДОГОНИКОТА-ФЕСТ»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/e8c/e8cf73d5ab016b586b01ce6487e61589.jpg',
      desc: '`abc`',
    },
    {
      id: 6,
      title: 'Приглашаем на вебинар «Почему «плачут» глазки»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/20e/20ed2969c28e4ca1c536f1182a664496.jpg',
      desc: '`abc `',
    },
    {
      id: 7,
      title: 'Вакцина «Эурикан» в наличии!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/851/851d5610a853e335b7147a003b1bed0f.jpg',
      desc: '`abc`',
    },
    {
      id: 8,
      title: 'Пополнение в компании Четыре Лапы!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/b90/b9077818db4e4dddd60e621184d21c58.jpg',
      desc: '`abc `',
    },
    {
      id: 9,
      title:
        'Бесплатный пункт мобильного груминга и ветеринарии Четыре Лапы снова начинает свою работу',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/2eb/2ebe982681767e117f07abd7713c47ce.jpg',
      desc: '`abc`',
    },
    {
      id: 10,
      title: 'Приглашаем на пет-экскурсию “Усадьба Быково”',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/8a0/8a0f456f3b2b21332f12efdd74163e16.jpg',
      desc: '`abc `',
    },
    {
      id: 11,
      title: 'Костюмированный Забег петербургских котов',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/6fc/6fc3cc20a8f21139964795c2990faa4c.jpg',
      desc: '`abc`',
    },
    {
      id: 12,
      title: 'Розыгрыш месячного запаса корма',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/709/709c76d5867695e2a257c3fe71817a0f.jpg',
      desc: '`abc `',
    },
    {
      id: 13,
      title: 'Открытие новых магазинов Четыре Лапы в июле',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/981/981dade6c0c19977f01ef5fabc3352db.png',
      desc: '`abc`',
    },
    {
      id: 14,
      title: 'Выставка-пристройство кошек совместно с ЮНА',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/5f3/5f3b47a9467fcfabf32da02c28e12aaf.jpg',
      desc: '`abc `',
    },
    {
      id: 15,
      title: 'Приглашаем на вебинар «Когда болит сердечко»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/087/087f58758b584aae75281784e11fdebd.jpg',
      desc: '`abc`',
    },
    {
      id: 16,
      title: 'День соседей Glorax Life ЖК Golden City г. Санкт-Петербург',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/92e/92e705e5fcf43c39c3b6b49788002cde.jpg',
      desc: '`abc `',
    },
    {
      id: 17,
      title: 'Благотворительная выставка-пристройство кошек и собак!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/0fc/0fc351e3d94c71cbaae4f950752cbd7c.jpg',
      desc: '`abc`',
    },
    {
      id: 18,
      title:
        'Бесплатный пункт мобильного груминга и ветеринарии Четыре Лапы снова начинает свою работу',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/23c/23cc2dd53e0426567189d5bedcaafa4b.jpg',
      desc: '`abc `',
    },
    {
      id: 19,
      title: 'Какой язык любви у вашего питомца?',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/b97/b97ccb11b3a7f80e75c47f38a8da1baa.jpg',
      desc: '`abc`',
    },
    {
      id: 20,
      title: 'Приглашаем на пет-экскурсию «Ансамбль Михайловского замка» Санкт-Петербурге!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/84d/84ddfaf532243a3041ee2d585020ad94.jpg',
      desc: '`abc `',
    },
    {
      id: 21,
      title: 'Приглашаем на вебинар «Что готовит нам лето?»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/a2f/a2f4dc64f8211ead18ba655776001d36.jpg',
      desc: '`abc`',
    },
    {
      id: 22,
      title: 'Год уникальному сервису: Пет-френдли МЕГА Химки!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/18c/18cb1ce006c7e9c84d78ca988b2427a4.jpg',
      desc: '`abc `',
    },
    {
      id: 23,
      title: 'Пет-экскурсия по Цветному бульвару',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/f25/f256e7ba75d7fe248e5f237c57413a38.jpg',
      desc: '`abc`',
    },
    {
      id: 24,
      title: 'Всемирный день петербургского кота',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/3b4/3b43a5faf8f1f836c1183700cb157a9a.jpg',
      desc: '`abc `',
    },
    {
      id: 25,
      title: 'Выставка-пристройство Юна',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/22c/22c2e54bc462235c7f04c06da4ecf1c4.jpg',
      desc: '`abc`',
    },
    {
      id: 26,
      title: 'Отмечаем дни рождения наших магазинов!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/19b/19badedae952f90c1b527aa48979daf8.jpg',
      desc: '`abc `',
    },
    {
      id: 27,
      title: 'Помогаем приютам круглый год!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/754/754dda125973073d85632021ebdf034b.jpg',
      desc: '`abc`',
    },
    {
      id: 28,
      title:
        'Информация о пет-сервисе «Пристройство питомцев» для владельцев питомников и заводчиков',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/815/815b19509213961981956004437dde6e.jpg',
      desc: '`abc `',
    },
    {
      id: 29,
      title:
        'Оплачивайте покупки в магазинах Четыре Лапы через СБП и участвуйте в летнем розыгрыше денежных призов',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/95d/95d088819fc76a5cbec1f8a6a65ae00c.jpg',
      desc: '`abc`',
    },
    {
      id: 30,
      title: 'Открытие новых магазинов Четыре Лапы в июне',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/e3c/e3cedc9adbdfe0514e4057a14faf16fa.jpg',
      desc: '`abc `',
    },
    {
      id: 31,
      title: 'ППет-экскурсия для маленьких пет-родителей в Санкт-Петербурге',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/a3b/a3b75248c365a364c7c333e0c4034ac6.jpg',
      desc: '`abc`',
    },
    {
      id: 32,
      title: 'ДЗадайте вопрос грумеру и ветеринарному врачу!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/490/490954c55ff9eed26209e0271afc432e.jpg',
      desc: '`abc `',
    },
    {
      id: 33,
      title: 'Фестиваль «Московская весна»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/resize/1600x740/upload/iblock/e0e/e0e441fbf9162a6711e3d8a2688e34c0.jpg',
      desc: '`abc`',
    },
    {
      id: 34,
      title: 'Вопрос-ответ: встреча с ветеринарным экспертом Четыре Лапы',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/877/8770198b74f736c6b6ef06aad673418c.jpg',
      desc: '`abc `',
    },
    {
      id: 35,
      title: 'Приглашаем на благотворительную ярмарку «Город неравнодушных»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/533/5332850376fc29e7194874fa9a21858d.jpg',
      desc: '`abc`',
    },
    {
      id: 36,
      title: 'Выездной прием врача-онколога',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/5c5/5c5cc3811ef722ebbca04e7b5014c13e.jpg',
      desc: '`abc `',
    },
    {
      id: 37,
      title: 'Приглашаем на выставку-пристройство благотворительного фонда «ДОГОНИКОТА-ФЕСТ»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/e8c/e8cf73d5ab016b586b01ce6487e61589.jpg',
      desc: '`abc`',
    },
    {
      id: 38,
      title: 'Приглашаем на вебинар «Почему «плачут» глазки»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/20e/20ed2969c28e4ca1c536f1182a664496.jpg',
      desc: '`abc `',
    },
    {
      id: 39,
      title: 'Вакцина «Эурикан» в наличии!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/851/851d5610a853e335b7147a003b1bed0f.jpg',
      desc: '`abc`',
    },
    {
      id: 40,
      title: 'Пополнение в компании Четыре Лапы!',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/b90/b9077818db4e4dddd60e621184d21c58.jpg',
      desc: '`abc `',
    },
    {
      id: 41,
      title:
        'Бесплатный пункт мобильного груминга и ветеринарии Четыре Лапы снова начинает свою работу',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/2eb/2ebe982681767e117f07abd7713c47ce.jpg',
      desc: '`abc`',
    },
    {
      id: 42,
      title: 'Приглашаем на пет-экскурсию “Усадьба Быково”',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/8a0/8a0f456f3b2b21332f12efdd74163e16.jpg',
      desc: '`abc `',
    },
    {
      id: 43,
      title: 'Костюмированный Забег петербургских котов',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/6fc/6fc3cc20a8f21139964795c2990faa4c.jpg',
      desc: '`abc`',
    },
    {
      id: 44,
      title: 'Розыгрыш месячного запаса корма',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/709/709c76d5867695e2a257c3fe71817a0f.jpg',
      desc: '`abc `',
    },
    {
      id: 45,
      title: 'Открытие новых магазинов Четыре Лапы в июле',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/981/981dade6c0c19977f01ef5fabc3352db.png',
      desc: '`abc`',
    },
    {
      id: 46,
      title: 'Выставка-пристройство кошек совместно с ЮНА',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/5f3/5f3b47a9467fcfabf32da02c28e12aaf.jpg',
      desc: '`abc `',
    },
    {
      id: 47,
      title: 'Приглашаем на вебинар «Когда болит сердечко»',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/087/087f58758b584aae75281784e11fdebd.jpg',
      desc: '`abc`',
    },
    {
      id: 48,
      title: 'День соседей Glorax Life ЖК Golden City г. Санкт-Петербург',
      category: 'event',
      date: '07-07-2023',
      img: 'https://4lapy.ru/crop/610x280/upload/iblock/92e/92e705e5fcf43c39c3b6b49788002cde.jpg',
      desc: '`abc `',
    },
  ];
  const { page, pageSize } = req.query;
  const startIndex = page * pageSize;
  const endIndex = startIndex + parseInt(pageSize, 10);

  const paginatedData = news.slice(startIndex, endIndex);

  res.status(200).json(paginatedData);
}
