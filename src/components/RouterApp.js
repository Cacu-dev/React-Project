import React from "react";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/category/:brand">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default RouterApp;
