import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import Expense from "./utilities/Expense";

const App = () => {
  const [expense, setExpense] = useState<Expense[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpense = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(exp) =>
            setExpense([...expense, { ...exp, id: expense.length + 1 }])
          }
        />
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
