import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Expenses } from "../Pages/expenses/Expenses";
import PrivateRoute from "./PrivateRoute";

export default function Router() {

  return (
    <div>

      <Switch>
       
        <PrivateRoute path="/expense">
          <Expenses />
        </PrivateRoute>

      </Switch>
    </div>
  );
}
