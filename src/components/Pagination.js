import React, { useState } from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage: ', currentPage);

  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / postPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        <li className='waves-effect'>
          <a
            href='#!'
            onClick={() => {
              paginate(1);
              setCurrentPage(1);
            }}
          >
            <i className='material-icons'>first_page</i>
          </a>
        </li>
        <li className='waves-effect'>
          <a
            href='#!'
            onClick={() => {
              paginate(prevCurrentPage =>
                prevCurrentPage > 1 ? prevCurrentPage - 1 : 1
              );
              setCurrentPage(prevCurrentPage =>
                prevCurrentPage > 1 ? prevCurrentPage - 1 : 1
              );
            }}
          >
            <i className='material-icons'>chevron_left</i>
          </a>
        </li>
        {lastPage <= 10 ? (
          pageNumbers.map(number => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <a
                href='#!'
                onClick={() => {
                  paginate(number);
                  setCurrentPage(number);
                }}
              >
                {number}
              </a>
            </li>
          ))
        ) : (
          <li key={currentPage} className='active'>
            <a
              href='#!'
              onClick={() => {
                paginate(currentPage);
              }}
            >
              {currentPage} of {lastPage}
            </a>
          </li>
        )}
        <li className='waves-effect'>
          <a
            href='#!'
            onClick={() => {
              paginate(prevCurrentPage => prevCurrentPage + 1);
              setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
            }}
          >
            <i className='material-icons'>chevron_right</i>
          </a>
        </li>
        <li className='waves-effect'>
          <a
            href='#!'
            onClick={() => {
              paginate(lastPage);
              setCurrentPage(lastPage);
            }}
          >
            <i className='material-icons'>last_page</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
