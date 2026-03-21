const BASE_URL = "http://localhost:5000/expenses";

export const getExpenses = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addExpense = async (data) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteExpense = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};