const SERVER_HOST = 'https://jsonplaceholder.typicode.com';

export const request = async (uri: string) => {
  return await fetch(`${SERVER_HOST}${uri}`)
    .then(response => response.json())
    .then(data => data);
};
