import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  return <ExpenseForm onSubmit={(data) => console.log(data)} />;
};

export default App;
