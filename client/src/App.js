import { useEffect, useState } from "react";
import { getExpenses } from "./api";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const loadData = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Expense Tracker</h1>
      <AddExpense refresh={loadData} />
      <ExpenseList expenses={expenses} refresh={loadData} />
    </div>
  );
}

export default App;