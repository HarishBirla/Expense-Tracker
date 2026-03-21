import { deleteExpense } from "../api";

export default function ExpenseList({ expenses, refresh }) {
  return (
    <div>
      {expenses.map((e) => (
        <div key={e.id}>
          <p>
            {e.title} - ₹{e.amount}
          </p>
          <button
            onClick={() => {
              deleteExpense(e.id);
              refresh();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}