import React from 'react';
import './styles/Loader.scss';
import loaderSVG from '../../assets/images/loader.svg';

const Loader = () => {
  return (
    <div className="component-loader">
      <img src={loaderSVG} alt="" />
    </div>
  );
};

export default Loader;
