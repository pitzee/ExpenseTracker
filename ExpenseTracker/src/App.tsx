import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, description: "milk", amount: 4, category: "utilities" },
    { id: 2, description: "milk", amount: 4, category: "groceries" },
    { id: 3, description: "milk", amount: 4, category: "entertainment" },
    { id: 4, description: "milk", amount: 4, category: "utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpense = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={(data) => console.log(data)} />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expense={visibleExpense}
        onDelete={(id) => {
          setExpense(expense.filter((expense) => expense.id !== id));
        }}
      />
    </>
  );
};

export default App;
