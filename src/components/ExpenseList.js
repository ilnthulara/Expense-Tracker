import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses to display.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              removeExpense={removeExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
