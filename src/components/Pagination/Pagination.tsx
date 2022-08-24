import React from 'react';
import BackArrow from '../../assets/images/back-arrow.svg';
import ForwardArrow from '../../assets/images/forward-arrow.svg';
import './styles/Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: any) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateBack = () => {
    paginate(currentPage - 1);
    if (currentPage <= 1) {
      paginate(pageNumbers.length);
    }
  };

  const paginateForward = () => {
    paginate(currentPage + 1);
    if (currentPage >= pageNumbers.length) {
      paginate(1);
    }
  };

  return (
    <div className="component-pagination">
      <button
        className="component-pagination__arrow"
        onClick={paginateBack}
        style={{
          backgroundImage: 'url(' + BackArrow + ')',
        }}
      />
      {pageNumbers.map((number, index) => {
        let activeClass: string;
        if (number === currentPage) {
          activeClass = 'active';
        }

        return (
          <button
            className={`component-pagination__number ${activeClass}`}
            onClick={() => paginate(number)}
            key={index}
          >
            {number}
          </button>
        );
      })}
      <button
        className="component-pagination__arrow"
        onClick={paginateForward}
        style={{
          backgroundImage: 'url(' + ForwardArrow + ')',
        }}
      />
    </div>
  );
};

export default Pagination;
