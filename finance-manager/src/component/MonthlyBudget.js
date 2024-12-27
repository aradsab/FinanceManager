function MonthlyBudget() {
    const budget = {
        daily: "$50",
        food: "$200",
        entertainment: "$100",
        clothes: "$75",
        extras: "$50",
    };

    return (
        <form className="p-4 bg-gray-100 rounded-md shadow">
            <h1 className="text-3xl font-semibold mb-6">Monthly Budget</h1>
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Daily Budget:</label>
                    <div className="border border-gray-300 rounded-md shadow-sm p-2">
                        {budget.daily}
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Food:</label>
                    <div className="border border-gray-300 rounded-md shadow-sm p-2">
                        {budget.food}
                    </div>
                </div>
            </div>
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Entertainment:</label>
                    <div className="border border-gray-300 rounded-md shadow-sm p-2">
                        {budget.entertainment}
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Clothes:</label>
                    <div className="border border-gray-300 rounded-md shadow-sm p-2">
                        {budget.clothes}
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Extras:</label>
                    <div className="border border-gray-300 rounded-md shadow-sm p-2">
                        {budget.extras}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default MonthlyBudget;
