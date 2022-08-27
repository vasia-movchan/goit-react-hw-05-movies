import { Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu/Menu';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
