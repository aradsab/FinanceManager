function PersonalInfo() {
    return (
        <form className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow">
            <h1 className="text-3xl font-semibold text-center">
                Personal Information
            </h1>
            <div className="flex mb-4 md:space-x-4">
                <label className="block text-gray-700">First Name:</label>
                <input
                    type="text"
                    className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="flex mb-4 md:space-x-4">
                <label className="block text-gray-700">Last Name:</label>
                <input
                    type="text"
                    className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                />
            </div>
        </form>
    );
}

export default PersonalInfo;