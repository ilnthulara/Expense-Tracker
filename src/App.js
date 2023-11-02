import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  // add and remove expenses
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const removeExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} />
    </div>
  );
}

export default App;
