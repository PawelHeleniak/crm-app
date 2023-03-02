import React from "react";
import "./assets/scss/global.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/bookmarks/dashboard/Dashboard";
import { Account } from "./pages/bookmarks/account/Account";
import { Calendar } from "./pages/bookmarks/calendar/Calendar";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/login" index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" index element={<Dashboard />} />
        <Route path="/konto" index element={<Account />} />
        <Route path="/kalendarz" index element={<Calendar />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
