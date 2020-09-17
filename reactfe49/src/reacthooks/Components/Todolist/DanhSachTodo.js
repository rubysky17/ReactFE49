import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Todolist from "./Todolist";
import TodoForm from "../TodoFrom/todoForm";
import PostList from "../PostList/PostList";
// "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"

DanhSachTodo.propTypes = {};

function DanhSachTodo(props) {
  const [todoList, setTodoList] = useState([]);
  function handleChangeRemove(todo) {
    let NewTodoList = [...todoList];
    let index = NewTodoList.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      NewTodoList.splice(index, 1);
    }
    setTodoList(NewTodoList);
  }
  function onSubmit(todo) {
    // console.log(todo);
    let NewTodoList = [...todoList];
    let newTodo = {
      id: NewTodoList.length + 1,
      text: todo.text,
    };
    NewTodoList.push(newTodo);
    setTodoList(NewTodoList);
  }
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const requestUrl =
        "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      console.log(responseJSON);

      setPost(responseJSON.data);
    }
    fetchPost();
  }, []);

  return (
    <div>
      <h3 className="my-4 display-4">
        Bài 2: Render list từ todoList và hàm sử lý xóa list ra khỏi mảng
      </h3>
      <h3 className="my-4 display-4">
        Bài 3: Thêm trường ô input để thêm các todo item
      </h3>
      <TodoForm onSubmit={onSubmit} />
      <Todolist todoList={todoList} handleChangeRemove={handleChangeRemove} />
      <h3 className="my-4 display-4">Bài 4: Sử dụng useEffect để gọi API</h3>
      <PostList post={post} />
    </div>
  );
}

export default DanhSachTodo;
