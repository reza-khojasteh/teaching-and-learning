import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "c1",
      title: "JS",
      amount: 994.12,
      date: new Date(2020, 7, 14),
    },
    { id: "c2", title: "TS", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "c3",
      title: "Java",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "c4",
      title: "React",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
