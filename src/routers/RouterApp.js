import React from "react";
import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/itemlist/ItemListContainer";
import ItemDetailContainer from "../components/itemdetail/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
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
