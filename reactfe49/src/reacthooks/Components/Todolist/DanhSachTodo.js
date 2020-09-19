import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import Todolist from "./Todolist";
import TodoForm from "../TodoFrom/todoForm";
import PostList from "../PostList/PostList";
import Pagination from "../Pagination";
// "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"

DanhSachTodo.propTypes = {};

function DanhSachTodo(props) {
  //State
  const [todoList, setTodoList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  //Hàm remove khi click vào todoList
  function handleChangeRemove(todo) {
    let NewTodoList = [...todoList];
    let index = NewTodoList.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      NewTodoList.splice(index, 1);
    }
    setTodoList(NewTodoList);
  }

  //Hàm add khi người dùng submit lên
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

  //Sử dụng useEffect để lấy API render ra các post List
  useEffect(() => {
    async function layAPI() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error", error.message);
      }
    }
    layAPI();
  }, [filters]);

  // hàm tiếp theo sẽ pagination cho phép chuyển trang tùy ý
  function onChangePage(newPage) {
    setFilters({ ...filters, _page: newPage });
    // console.log(newPage);
  }
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
      <PostList postList={postList} />
      <Pagination pagination={pagination} onChangePage={onChangePage} />
    </div>
  );
}

export default DanhSachTodo;
