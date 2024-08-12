import Expense from "../utilities/Expense";

interface Props {
  expense: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expense.map((ex) => (
          <tr key={ex.id}>
            <td>{ex.description}</td>
            <td>${ex.amount}</td>
            <td>{ex.category}</td>

            <td>
              {
                <button
                  onClick={() => onDelete(ex.id)}
                  className="btn btn-danger"
                >
                  delete
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expense
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
