import React, { useState, useRef } from "react";

export const PostSearch = ({ handleFilterChange }) => {
  const [text, setText] = useState("");
  //biến tạm này sẽ không thay đổi sau mỗi lần render
  const typingTimeoutRef = useRef(null);
  function onHandleChange(e) {
    let value = e.target.value;
    setText(value);
    if (!handleFilterChange) {
      return;
    }
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        text: value,
      };
      handleFilterChange(formValue);
    }, 300);
  }
  return (
    <div>
      <h5>Search Everything you want</h5>
      <input type="text" value={text} onChange={onHandleChange} />
    </div>
  );
};
