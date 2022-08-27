import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../services/Api';

import { CastImage, CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setLoading(true);

        const { cast } = await getMovieCredits(movieId);
        console.log(cast);
        setCredits(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  const castList = credits?.map(({ id, name, character, profile_path }) => (
    <CastItem key={id}>
      {profile_path ? (
        <CastImage
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
      ) : (
        <CastImage src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg" />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </CastItem>
  ));

  return (
    <>
      {loading && <p>... Loading</p>}
      {credits && <CastList>{castList}</CastList>}
      {error && <p>...Movies load failed</p>}
    </>
  );
};

export default Cast;
