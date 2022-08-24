import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import twnLogo from '../../assets/images/logo.svg';
import backArrow from '../../assets/images/back-arrow.svg';
import forwardArrow from '../../assets/images/forward-arrow.svg';
import './styles/Header.scss';

const Header = () => {
  const location = useLocation();
  return (
    <header className="component-header">
      <Link className="component-header__link" to={'/'}>
        <img src={backArrow} alt="" />
        Tagasi
      </Link>
      <div className="component-header__logo">
        <img src={twnLogo} alt="" />
      </div>
      {location.pathname === '/list' ? (
        <div className="component-header__link"></div>
      ) : (
        <Link className="component-header__link" to={'/list'}>
          <img src={forwardArrow} alt="" />
          Tabel
        </Link>
      )}
    </header>
  );
};

export default Header;
