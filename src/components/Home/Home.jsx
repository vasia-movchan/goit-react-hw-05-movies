import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from '../../services/Api';

import { Wrapper } from './Home.styled';

const Home = () => {
  const [itemsMovies, setItemsMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const { results } = await getTrendingMovies();
        setItemsMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const location = useLocation();
  console.log(location);

  const listMovies = itemsMovies.map(({ id, title }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return (
    <Wrapper>
      <h2>Trending today</h2>
      {<ul>{listMovies}</ul>}
      {loading && <p>...Loading</p>}
      {error && <p>...Movies load failed</p>}
    </Wrapper>
  );
};

export default Home;
