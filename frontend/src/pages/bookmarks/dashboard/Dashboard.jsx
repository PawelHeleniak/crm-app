import React from "react";
import { Nav } from "../../../components/Nav";
import { Card } from "./components/Card";

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
      amount: "143",
    },
  ];
  const card = cards.map((val) => <Card data={val} />);

  return (
    <>
      <Nav />
      <main>
        <section>{card}</section>
      </main>
    </>
  );
}
