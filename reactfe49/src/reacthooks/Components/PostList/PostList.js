import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  postList: PropTypes.array,
};
PostList.defaultProps = {
  postList: [],
};

function PostList(props) {
  let { postList } = props;
  return (
    <ul className="post-list">
      {postList.map((post, index) => {
        return <li key={index}>{post.title}</li>;
      })}
    </ul>
  );
}

export default PostList;
