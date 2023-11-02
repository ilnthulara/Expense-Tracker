import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && amount) {
      const newExpense = {
        id: Math.random().toString(),
        name,
        amount: parseFloat(amount),
      };

      addExpense(newExpense);

      // Clear the form after adding expense
      setName("");
      setAmount("");
    } else {
      alert("Please enter both name and amount for the expense.");
    }
  };

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Expense Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
