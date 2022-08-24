import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';
import './styles/App.scss';

const Article = lazy(() => import('./pages/Article/Article'));
const Table = lazy(() => import('./pages/Table/Table'));

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <main className="app__content">
        {location.pathname !== '/' && <Header />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="article/:slug" element={<Article />} />
            <Route path="list" element={<Table />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
