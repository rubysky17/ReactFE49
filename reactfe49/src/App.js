import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TrangChu from "./pages/TrangChu/TrangChu";
import { HomeTemplate } from "./templates/HomeTemplate";
import ModalHOC from "./HOC/ModalHOC";
import DemoHOC from "./HOC/DemoHOC";
import { AdminTemplate } from "./templates/AdminTemplate";
import FilmManager from "./pages/FilmManager/FilmManager";
import UserManager from "./pages/UserManager/UserManager";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeTemplate exact path="/about" Component={About} />
        <Route exact path="/trangchu" component={TrangChu} />
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <HomeTemplate exact path="/detail" Component={Detail} />

        <HomeTemplate exact path="/hoc" Component={DemoHOC} />
        <AdminTemplate exact path="/admin/films" Component={FilmManager} />
        <AdminTemplate exact path="/admin/users" Component={UserManager} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
