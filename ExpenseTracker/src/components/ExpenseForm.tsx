const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="numer" className="form-control" />
      </div>
      <div mb-3>
        <label htmlFor="category">Category</label>
        <select className="form-select">
          <option selected></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default ExpenseForm;
