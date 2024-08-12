interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      <option value="groceries">groceries</option>
      <option value="utilities">utilities</option>
      <option value="entertainment">entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
