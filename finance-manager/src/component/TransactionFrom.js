import React, { useState } from 'react';

function TransactionForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [earnings, setEarnings] = useState([]);

  const handleAddEarning = (e) => {
    e.preventDefault(); // Prevent form submission

    if (description && amount) {
      setEarnings([...earnings, { description, amount }]); // Add the earning
      setDescription(''); // Clear the description field
      setAmount(''); // Clear the amount field
    }
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 rounded-md shadow">
      <h1 className="text-3xl font-semibold">Add Earnings</h1>
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
          className="mb-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={handleAddEarning}
        >
          Add Transaction
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold">Earnings List</h2>
        {earnings.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {earnings.map((earning, index) => (
              <li
                key={index}
                className="p-2 bg-white shadow-sm rounded-md flex justify-between"
              >
                <span>{earning.description}</span>
                <span>${earning.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No earnings added yet.</p>
        )}
      </div>
    </div>
  );
}

export default TransactionForm;
