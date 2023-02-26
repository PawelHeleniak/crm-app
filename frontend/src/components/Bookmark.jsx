import React from "react";
import { Link } from "react-router-dom";

export function Bookmark({ data, active, handleActive }) {
  return (
    <div className={active === data.name ? "bookmark active" : "bookmark"}>
      <Link to={data.link} onClick={(e) => handleActive(data.name)}>
        {data.name}
      </Link>
    </div>
  );
}
