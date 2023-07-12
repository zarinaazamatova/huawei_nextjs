export const getData = () => {
  return fetch(
    'https://gist.githubusercontent.com/zarinaazamatova/40e2066191645e073e58cefa8fad6167/raw/dbada8145a1140226af996778b11009d6815b431/news.json',
  ).then((resp) => {
    if (resp.status === 200) return resp.json();
    throw new Error('Invalid response');
  });
};
