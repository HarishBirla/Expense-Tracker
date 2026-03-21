const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let expenses = [];

// Add expense
app.post("/expenses", (req, res) => {
  const newExpense = {
    id: Date.now(),
    title: req.body.title,
    amount: req.body.amount,
  };
  expenses.push(newExpense);
  res.json(newExpense);
});

// Get all expenses
app.get("/expenses", (req, res) => {
  res.json(expenses);
});

// Delete expense
app.delete("/expenses/:id", (req, res) => {
  expenses = expenses.filter((e) => e.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});