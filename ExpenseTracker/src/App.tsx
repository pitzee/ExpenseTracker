import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, description: "milk", amount: 4, category: "utility" },
    { id: 2, description: "milk", amount: 4, category: "utility" },
    { id: 3, description: "milk", amount: 4, category: "utility" },
    { id: 4, description: "milk", amount: 4, category: "utility" },
  ]);

  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={(data) => console.log(data)} />
      </div>

      <ExpenseList
        expense={expense}
        onDelete={(id) => {
          setExpense(expense.filter((expense) => expense.id !== id));
        }}
      />
    </>
  );
};

export default App;
