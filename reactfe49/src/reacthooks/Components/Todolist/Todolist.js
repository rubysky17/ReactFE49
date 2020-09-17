import React from "react";
import PropTypes from "prop-types";

Todolist.propTypes = {
  todoList: PropTypes.array,
  handleChangeRemove: PropTypes.func,
};
Todolist.defaultProps = {
  todoList: [],
  handleChangeRemove: null,
};

function Todolist(props) {
  let { todoList, handleChangeRemove } = props;
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                handleChangeRemove(todo);
              }}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
      <p>Click if you want remove</p>
    </div>
  );
}

export default Todolist;
