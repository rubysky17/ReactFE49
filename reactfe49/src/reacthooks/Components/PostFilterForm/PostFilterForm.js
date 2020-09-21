import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;

  // Tạo state searchTerm là giá trị search của ô input
  const [searchTerm, setSearchTerm] = useState("");
  //Phương pháp sử dụng debounce đơn giản bằng cách tạo 1 cái biến tạm và biến này sẽ không thay đổi sau mỗi lần render
  const typingTimeoutRef = useRef(null);

  function onHandleChangeSearch(e) {
    const value = e.target.value;

    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={onHandleChangeSearch} />
    </div>
  );
}

export default PostFilterForm;
