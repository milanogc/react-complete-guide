import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((ei) => (
        <ExpenseItem
          key={ei.id}
          title={ei.title}
          amount={ei.amount}
          date={ei.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
