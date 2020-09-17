import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  post: PropTypes.array,
};
PostList.defaultProps = {
  post: [],
};

function PostList(props) {
  let { post } = props;
  return (
    <ul>
      {post.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default PostList;
