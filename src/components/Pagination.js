import React, { useState } from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage: ', currentPage);

  const lastPage = Math.ceil(totalPosts / postPerPage);

  let startPage, endPage;
  if (lastPage <= 8) {
    //Less than 8 pages, show all
    startPage = 1;
    endPage = lastPage;
  } else {
    //More than 8 pages, calculate start and end pages
    if (currentPage <= 5) {
      startPage = 1;
      endPage = 8;
    } else if (currentPage + 2 >= lastPage) {
      startPage = lastPage - 7;
      endPage = lastPage;
    } else {
      startPage = currentPage - 4;
      endPage = currentPage + 3;
    }
  }

  //Create an array of pages shown
  let pages = [...Array(endPage + 1 - startPage).keys()].map(
    i => startPage + i
  );
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
        {pages.map((page, index) => (
          <li key={index} className={currentPage === page ? 'active' : ''}>
            <a
              href='#!'
              onClick={() => {
                paginate(page);
                setCurrentPage(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
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
