function TransactionForm() {
    return (
        <form className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                    placeholder="Enter transaction description"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Amount</label>
                <input
                    type="number"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                    placeholder="Enter amount"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Add Transaction
            </button>
        </form>
    );
}

export default TransactionForm;
