import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { FormStyled, Wrapper } from './Movies.styled';

import { getMovies } from '../../services/Api';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [itemsMovies, setItemsMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const handleChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: inputValue });
    setInputValue('');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const { results } = await getMovies(searchQuery);
        console.log(results);
        setItemsMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const listMovies = itemsMovies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} required />
        <button>Search</button>
      </FormStyled>
      {itemsMovies && <ul>{listMovies}</ul>}
      {searchQuery && itemsMovies.length === 0 && (
        <p>Nothing was found for your request</p>
      )}
      {loading && <p>...Loading</p>}
      {error && <p>...Movies load failed</p>}
    </Wrapper>
  );
};

export default Movies;
