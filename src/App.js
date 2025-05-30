import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };
  const income = transactions
  .filter(transaction => transaction.amount > 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);

const expense = transactions
  .filter(transaction => transaction.amount < 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);
  return (
    <div className="App">
      <card>
        <h2>Expense Tracker</h2>

        <h3>Your Balance</h3>
        <h1 className="Total">
          {transactions.reduce((acc, transaction) => acc + transaction.amount, 0)} 
        </h1>
        {/*inc section */}
        <div className="income">
            <h2>Income</h2>
            <p>₹{income}</p>
          </div>
          <div className="expense">
            <h2>Expense</h2>
            <p>₹{Math.abs(expense)}</p>
          </div>

        {/* History Section */}
        <section className="History">
          <h3>History</h3>
          <hr />
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id} className={transaction.amount > 0 ? "income" : "expense"}>
                {transaction.text} <span>{transaction.amount > 0 ? "+" : ""}{transaction.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Add Transaction Section */}
        <section>
          <h3>Add New Transaction</h3>
          <hr />
          <input 
            placeholder="Enter Text" 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <input 
            placeholder="Enter Amount" 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
          <p>Amount (- for negative and + for positive)</p>
          <button onClick={addTransaction}>Add transaction</button>
        </section>
      </card>
    </div>
  );
}

export default App;
