import axios from 'axios';

const KEY_API = 'a4fc55630f18a734e904fff92448a44f';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY_API,
  },
});

export async function getTrendingMovies() {
  const { data } = await instance.get('/trending/movie/day');

  return data;
}

export async function getSingleMovies(id) {
  const { data } = await instance.get(`/movie/${id}`);

  return data;
}

export async function getMovieCredits(id) {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
}
