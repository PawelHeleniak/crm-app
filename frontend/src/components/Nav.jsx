import React, { useEffect, useState, useRef } from "react";
import { Bookmark } from "./Bookmark";
import { Link } from "react-router-dom";
import user from "../assets/icon/user.png";

export function Nav() {
  const bookmarks = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Konto",
      link: "/konto",
    },
    {
      name: "Kalendarz",
      link: "/kalendarz",
    },
    {
      name: "Pracownicy",
      link: "/dashboard",
    },
  ];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  //change active bookmark
  const handleActive = (e) => {
    setActive(e);
  };

  const bookmark = bookmarks.map((val) => (
    <Bookmark data={val} active={active} handleActive={handleActive} />
  ));

  //active nav
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
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
      <div className={`menu ${open ? "active" : ""}`} ref={menuRef}>
        <div className="user-informations">
          <img src={user} alt="" />
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
