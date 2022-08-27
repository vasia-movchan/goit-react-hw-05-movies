import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getSingleMovies } from '../../services/Api';

import {
  MovieCard,
  MoviePoster,
  AddInfo,
  ButtonStyled,
} from './MovieDetails.styled';

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
        setSingleMovie(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const goBack = () => navigate(from);

  const { poster_path, title, overview, genres, vote_average } = singleMovie;

  const genresList = genres?.map(item => item.name).join(' ');

  return (
    <>
      <ButtonStyled onClick={goBack}>Go Back</ButtonStyled>
      {loading && <p>...Loading</p>}

      {error ? (
        <p>...Movies load failed</p>
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
              <p>User Score: {Math.round(vote_average * 10)}%</p>
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
                <Link state={{ from }} to={`/movies/${movieId}/cast`}>
                  Cast
                </Link>
              </li>
              <li>
                <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </AddInfo>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
