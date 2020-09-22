import React from "react";

export const Pagination = ({ pagination, onChangePage }) => {
  let { _limit, _page, _totalRows } = pagination;
  const trangCuoi = Math.ceil(_totalRows / _limit);
  return (
    <div>
      <button
        className="btn btn-success mr-3"
        disabled={_page <= 1}
        onClick={() => {
          onChangePage(_page - 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-success ml-3"
        disabled={_page >= trangCuoi}
        onClick={() => {
          onChangePage(_page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
