import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import queryString from "query-string";

import Todolist from "./Todolist";
import TodoForm from "../TodoFrom/todoForm";
import PostListForm from "../PostListForm/PostListForm";
import { Pagination } from "../Pagination/Pagination";
import { PostSearch } from "../PostSearch/PostSearch";
// "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"

DanhSachTodo.propTypes = {};

function DanhSachTodo(props) {
  //State toDo
  const [todoList, setTodoList] = useState([]);
  //state API
  const [postList, setPostList] = useState([]);
  //state Pagination
  const [pagination, setPagination] = useState([]);
  //State Filters
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
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
        const queryParams = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${queryParams}`;
        const response = await axios.get(requestUrl);
        const { data, pagination } = response.data;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error", error.message);
      }
    }
    layAPI();
  }, [filters]);
  // hàm pagination cho phép chuyển trang
  function onChangePage(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function handleFilterChange(newSearchTerm) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newSearchTerm.text,
    });
  }
  return (
    <div>
      {/* <h3 className="my-4">
        Bài 2: Render list từ todoList và hàm sử lý xóa list ra khỏi mảng
      </h3>
      <h3 className="my-4">Bài 3: Thêm trường ô input để thêm các todo item</h3>
      <TodoForm onSubmit={onSubmit} />
      <Todolist todoList={todoList} handleChangeRemove={handleChangeRemove} />
      <h3 className="my-4">Bài 6: sử dụng useEffect làm debounce search </h3>
      <PostSearch handleFilterChange={handleFilterChange} />
      <h3 className="my-4">Bài 4: Sử dụng useEffect để gọi API</h3>
      <PostListForm postList={postList} />
      <h3 className="my-4">Bài 5 : Sử dụng useEffect để làm pagination</h3>
      <Pagination pagination={pagination} onChangePage={onChangePage} />
      <h3 className="my-4">Bài 7 : Sử dụng useEffect để làm pagination</h3> */}
    </div>
  );
}

export default DanhSachTodo;
