import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail/:danhSach" component={Detail} />
        <Route exact path="/detail" component={Detail} />

        <Route exact path="/" component={Home} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import Home from './pages/Home/Home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Contact from './pages/Contact/Contact';
// import About from './pages/About/About';
// import Header from './components/Header/Header';
// import Login from './pages/Login/Login';
// import Detail from './pages/Detail/Detail';
// import PageNotFound from './pages/PageNotFound/PageNotFound';
// import Profile from './pages/Profile/Profile';
// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       {/* <Home abc="123"/> */}
//       <Switch>
//         <Route exact path='/home' component={Home} />
//         <Route exact path='/contact' component={Contact} />
//         <Route exact path='/about' component={About} />
//         <Route exact path='/login' component={Login} />
//         <Route exact path='/detail/:id' component={Detail} />
//         <Route exact path='/profile' component={Profile} />

//         <Route exact path='/' component={Home} />
//         <Route exact path='*' component={PageNotFound} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
