import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ICart } from "../../pages/PlantProtection/PlantProtection";
import { catalogItems } from "../../static/cartItems";

import "./Pagination.styles.css";

export interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
  currentPosts: ICart[];
  postsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
  currentPosts,
  postsPerPage,
}) => {
  const pageCount = Math.ceil(catalogItems.length / postsPerPage);

  return (
    <ReactPaginate
      className='root'
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      previousLabel='<'
    />
  );
};
