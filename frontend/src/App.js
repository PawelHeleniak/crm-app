import React from "react";
import "./assets/scss/global.scss";

import {Register} from "./pages/register/Register"
import {Login} from "./pages/login/Login"
import {Dashboard} from "./pages/bookmarks/dashboard/Dashboard"

export function App() {
  return (
    <Dashboard/>
  );
}