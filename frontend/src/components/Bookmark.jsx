import React from "react";
import { Link } from "react-router-dom";

export function Bookmark({ data, handleActive, link }) {
  return (
    <div className={data.active ? "bookmark active" : "bookmark"}>
      <Link to={data.link} onClick={handleActive}>
        {data.name}
      </Link>
    </div>
  );
}
