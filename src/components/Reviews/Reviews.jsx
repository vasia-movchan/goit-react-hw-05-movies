import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/Api';

import { ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const reviewsList = reviews?.map(({ id, author, content }) => (
    <ReviewsItem key={id}>
      <h5>AUTHOR: {author}</h5>
      <p>{content}</p>
    </ReviewsItem>
  ));

  return (
    <>
      {loading && <p>... Loading</p>}
      {reviewsList.length > 0 ? (
        <ReviewsList>{reviewsList}</ReviewsList>
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
      {error && <p>...Movies load failed</p>}
    </>
  );
};

export default Reviews;
