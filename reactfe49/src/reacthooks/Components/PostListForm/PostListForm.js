import React from "react";
import PropTypes from "prop-types";

PostListForm.propTypes = {
  postList: PropTypes.array,
};
PostListForm.defaultProps = {
  postList: [],
};

function PostListForm(props) {
  let { postList } = props;
  return (
    <ul>
      {postList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default PostListForm;
