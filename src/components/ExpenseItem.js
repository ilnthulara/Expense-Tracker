import React from "react";

const ExpenseItem = ({ expense, removeExpense }) => {
  const { id, name, amount } = expense;

  return (
    <li className="expense-item">
      <span>{name}</span>
      <span>${amount}</span>
      <button onClick={() => removeExpense(id)}>Remove</button>
    </li>
  );
};

export default ExpenseItem;
