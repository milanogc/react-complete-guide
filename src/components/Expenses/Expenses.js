import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("");

  const yearChangeHandler = (year) => {
    console.log(`Previous value: ${enteredYear}`);
    setEnteredYear(year);
    console.log(`Selected value: ${year}`);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler} />

        {props.items.map((ei) => (
          <ExpenseItem
            key={ei.id}
            title={ei.title}
            amount={ei.amount}
            date={ei.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
