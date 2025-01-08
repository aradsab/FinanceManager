import React, { useState } from 'react';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault(); // Prevent form submission

    if (description && amount) {
      setTransactions([...transactions, { description, amount }]); // Add the transaction
      setDescription(''); // Clear the description field
      setAmount(''); // Clear the amount field
    }
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 rounded-md shadow">
      <h1 className="text-3xl font-semibold">Add Expenses</h1>
      <form className="flex mb-4 md:space-x-4 flex-wrap">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring"
            placeholder="Enter transaction description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="button" // Use button to prevent default form behavior
          className="w-400 mb-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={handleAddTransaction}
        >
          Add Transaction
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold">Transaction List</h2>
        {transactions.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="p-2 bg-white shadow-sm rounded-md flex justify-between"
              >
                <span>{transaction.description}</span>
                <span>${transaction.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No transactions added yet.</p>
        )}
      </div>
    </div>
  );
}

export default ExpenseForm;
