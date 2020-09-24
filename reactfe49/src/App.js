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

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/trangchu" component={TrangChu} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/detail" component={Detail} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
