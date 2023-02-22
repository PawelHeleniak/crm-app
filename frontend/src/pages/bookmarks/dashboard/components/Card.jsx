import React from "react";

export function Card(props) {
  const { title, description, amount } = props.data;
  return (
    <div className="card-wrapper">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-info">
        <div className="info">
          <h3>{description}</h3>
        </div>
        <div className="info">
          <h3>{amount}</h3>
        </div>
      </div>
    </div>
  );
}
