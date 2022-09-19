import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import style from '../css-modules/Paginateon.module.css';

const Pagination = ({ onPageChange }) => {
  return (
    <div>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        className={style.pagenation}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(n) => onPageChange(n.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
