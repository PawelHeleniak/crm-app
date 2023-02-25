import React, { useEffect, useState, useRef } from "react";
import { Bookmark } from "./Bookmark";
import { Link } from "react-router-dom";

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
  const [open, setOpen] = useState(false);

  const handleActive = () => {
    console.log("s");
  };

  const bookmark = bookmarks.map((val) => (
    <Bookmark data={val} handleActive={handleActive} />
  ));

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      console.log(menuRef.current);
      if (menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <nav>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>O</p>
      </div>
      <div className={`menu ${!open ? "active" : ""}`} ref={menuRef}>
        <div className="title">
          <div className="user-permissions">
            <h1>Admin</h1>
          </div>
        </div>
        <div className="user-informations">
          <h2>Imie Nazwisko</h2>
          <h3>Admin</h3>
        </div>
        <div className="bookmarks">{bookmark}</div>
        <div className="logout">
          <Link to="/login">Log out</Link>
        </div>
      </div>
    </nav>
  );
}
