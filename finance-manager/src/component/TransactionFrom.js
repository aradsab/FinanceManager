function TransactionForm() {
    return (
        <form className="mx-auto p-4 bg-gray-100 rounded-md shadow">
            <h1 className="text-3xl font-semibold">
                Add Earnings
            </h1>
            <div className="flex mb-4 md:space-x-4 flex-wrap">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <input
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring"
                        placeholder="Enter transaction description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Amount</label>
                    <input
                        type="number"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring"
                        placeholder="Enter amount"
                    />
                </div>
                <button
                    type="submit"
                    className="mb-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Add Transaction
                </button>
            </div>

        </form>
    );
}

export default TransactionForm;
