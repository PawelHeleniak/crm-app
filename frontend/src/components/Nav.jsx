import React from "react";
import { Bookmark } from "./Bookmark";

export function Nav() {
  const bookmarks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      active: true,
    },
    {
      name: "Konto",
      link: "/dashboard",
      active: false,
    },
    {
      name: "Pracownicy",
      link: "/dashboard",
      active: false,
    },
  ];

  const handleLogout = () => {
    alert("wylogowano");
  };
  const handleActive = () => {
    console.log("s");
  };

  const bookmark = bookmarks.map((val) => (
    <Bookmark data={val} handleActive={handleActive} />
  ));

  return (
    <header>
      <nav>
        <div className="title">
          <div className="user-permissions">
            <h1>Admin</h1>
          </div>
          <div className="logout">
            <span onClick={handleLogout}>Log out</span>
          </div>
        </div>
        <div className="user-informations">
          <h2>Imie Nazwisko</h2>
          <h3>Admin</h3>
        </div>
        <div className="bookmarks">{bookmark}</div>
      </nav>
    </header>
  );
}
