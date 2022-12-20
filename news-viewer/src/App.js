import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route exact={true} path=":id" element={<NewsPage />} />
      <Route path="/" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
