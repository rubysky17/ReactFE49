import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    let { value } = event.target;
    setValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // this.props.handleSubmit(value);
    const formSubmit = {
      text: value,
    };
    props.onSubmit(formSubmit);
    setValue("");
  }
  //   let { onSubmit } = props;
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Đây là ô input dùng để thêm các danh sách làm việc</h3>
      <div className="row">
        <div className="form-group col-6">
          <p className="text-success">Type for add</p>
          <input
            className="form-control"
            onChange={handleChange}
            value={value}
          />
        </div>
        <div className="col-6 mt-4">
          <button type="submit" className="btn btn-warning">
            Xác nhận
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
