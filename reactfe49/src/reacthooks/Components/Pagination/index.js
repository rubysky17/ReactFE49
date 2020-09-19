import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onChangePage: PropTypes.func,
};
Pagination.defaultProps = {
  onChangePage: null,
};
function Pagination(props) {
  let { pagination, onChangePage } = props;
  let { _limit, _page, _totalRows } = pagination;
  let trangCuoi = Math.ceil(_totalRows / _limit);
  console.log(_page);
  return (
    <div>
      <button
        className="btn btn-success mr-5"
        disabled={_page <= 1}
        onClick={() => onChangePage(_page - 1)}
      >
        prev
      </button>
      <button
        className="btn btn-success"
        disabled={_page >= trangCuoi}
        onClick={() => onChangePage(_page + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
