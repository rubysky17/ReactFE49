import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading....</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};
