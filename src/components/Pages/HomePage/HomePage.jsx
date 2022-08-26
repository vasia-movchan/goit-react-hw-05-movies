import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

import { Wrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <h2>Trending today</h2>
      <TrendingMovies />
    </Wrapper>
  );
};

export default HomePage;
