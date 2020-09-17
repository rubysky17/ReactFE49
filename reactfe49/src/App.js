import React from "react";
import "../src/reacthooks/App.scss";
import ColorBox from "./reacthooks/Components/Colorbox";
import DanhSachTodo from "./reacthooks/Components/Todolist/DanhSachTodo";

function App() {
  return (
    <div className="app container text-center">
      <h1>Hello React Hook</h1>
      <ColorBox />
      <DanhSachTodo />
    </div>
  );
}

export default App;
