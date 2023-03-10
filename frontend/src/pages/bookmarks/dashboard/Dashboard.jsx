import React from "react";
import { Nav } from "../../../components/Nav";
import { Card } from "./components/Card";
import { Chart } from "./components/Chart";

export function Dashboard() {
  const cards = [
    {
      title: "Leady",
      description: "Aktualny miesiąc",
      amount: "22",
    },
    {
      title: "Projekty",
      description: "Aktualny miesiąc",
      amount: "6",
    },
    {
      title: "Zadania",
      description: "Aktualny miesiąc",
      amount: "103",
    },
  ];
  const card = cards.map((val) => <Card data={val} />);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="section-container">
          <section className="section-card">{card}</section>
          <section className="section-chart">
            <Chart />
          </section>
        </div>
      </main>
    </>
  );
}
