import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Posts } from "./Components/Posts";
import { Pagination } from "./Components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    try {
      async function fetchAPI() {
        setLoading(true);
        const reqUrl = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(reqUrl);
        let { data } = res;
        setPosts(data);
        setLoading(false);
      }
      fetchAPI();
    } catch (error) {
      console.log("error", error.message);
    }
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function changePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App container">
      <h1 className="text-primary m-5">My blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        changePagination={changePagination}
      />
    </div>
  );
}

export default App;
