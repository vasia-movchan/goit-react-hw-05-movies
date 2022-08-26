import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from '../../services/Api';

const TrendingMovies = () => {
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

    if (itemsMovies.length === 0) {
      fetchMovies();
    }
  }, [itemsMovies]);

  const listMovies = itemsMovies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`movie/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <div>
      {<ul>{listMovies}</ul>}
      {loading && <p>...Loading</p>}
      {error && <p>...Movies load failed</p>}
    </div>
  );
};

export default TrendingMovies;
