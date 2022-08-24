import * as React from 'react';
import { Link } from 'react-router-dom';
import twnLogo from '../../assets/images/logo.svg';
import './styles/Home.scss';

const Home = () => {
  return (
    <div className="page-home">
      <div className="page-home__container">
        <img className="page-home__logo" src={twnLogo} alt="" />
        <nav className="page-home__navigation">
          <Link to={'/article/972d2b8a'}>Artikkel</Link>
          <Link to={'/list'}>Tabel</Link>
          <Link to={'/game'}>Game of Life</Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
