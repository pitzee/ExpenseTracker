import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={(data) => console.log(data)} />
      </div>

      <ExpenseList />
    </>
  );
};

export default App;
