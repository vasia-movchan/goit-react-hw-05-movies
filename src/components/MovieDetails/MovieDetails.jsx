import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

import { getSingleMovies } from '../../services/Api';

import { MovieCard, MoviePoster, AddInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getSingleMovies(movieId);
        console.log(results);
        setSingleMovie(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = singleMovie;

  const genresList = genres?.map(item => item.name).join(' ');

  return (
    <>
      {loading ? (
        <p>...Loading</p>
      ) : (
        <>
          <MovieCard>
            {poster_path && (
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            )}
            <div>
              <h2>{title}</h2>
              <p>User Score: {vote_average * 10}%</p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genresList}</p>
            </div>
          </MovieCard>
          <AddInfo>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </AddInfo>
          <Outlet />
        </>
      )}
      {error && <p>...Movies load failed</p>}
    </>
  );
};

export default MovieDetails;
