import React from "react";

export const Detail = (props) => {
  return (
    <div>
      id: {props.match.params.id}
      id2: {props.match.params.id2}
      <h2>Hello</h2>
    </div>
  );
};
