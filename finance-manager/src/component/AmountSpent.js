function AmountSpent() {
    return (
        <form className="p-4 bg-white rounded-md shadow mt-6">
            <h2 className="text-2xl font-semibold mb-4">Add Expenses</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Type of Purchase:</label>
                <select
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200"
                >
                    <option value="rent">Rent</option>
                    <option value="tuition">Tuition</option>
                    <option value="health">Health</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="clothes">Clothes</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Amount Spent:</label>
                <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200"
                    placeholder="Enter amount spent"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Amount Spent
            </button>
        </form>
    );
}
export default AmountSpent;