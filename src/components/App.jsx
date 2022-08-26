import { Routes, Route } from 'react-router-dom';
import HomePage from 'components/Pages/HomePage/HomePage';

import Menu from 'components/Menu/Menu';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
