import axios from 'axios';

export const getAllFilms = async () => {
  const options = {
    method: 'GET',
    url: '/api/film',
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllFilmsByContinent = async (continent) => {
  const options = {
    method: 'GET',
    url: `/api/film/continent/${continent}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllLikedFilmsForUser = async (userId) => {
  const options = {
    method: 'GET',
    url: `/api/users/${userId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
