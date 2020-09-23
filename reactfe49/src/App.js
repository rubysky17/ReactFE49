import React from "react";
import "./App.css";
import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";

import Routes from "../src/Routers/Route";
function App() {
  return (
    <Router>
      <div className="app">
        {/* Menu */}
        <Menu />
        {/* Nội dung */}
        <Switch>
          {Routes.map((item, index) => {
            return (
              <Route
                key={index}
                exact={item.exact}
                path={item.path}
                component={item.main}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
{
}
