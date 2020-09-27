import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <HomeLayout>
            <Component {...propsRoute} />
          </HomeLayout>
        );
      }}
    />
  );
};
