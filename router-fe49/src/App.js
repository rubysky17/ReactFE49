import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header/Header";
import { Detail } from "./components/Detail/Detail";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail/:id/:id2" component={Detail} />
        <Route exact path="*" component={PageNotFound} />
        <Route
          exact
          path="/login"
          render={(props) => {
            return (
              <div>
                <Login {...props} />
              </div>
            );
          }}
        />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
