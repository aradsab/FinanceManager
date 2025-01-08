function PersonalInfo() {
    return (
        <form className="p-4 bg-gray-100 rounded-md shadow">
            <h1 className="text-3xl font-semibold text">
                Personal Information
            </h1>
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">First Name:</label>
                    <input
                        type="text"
                        className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Enter first name"
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Last Name:</label>
                    <input
                        type="text"
                        className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Enter last name"
                    />
                </div>
                
            </div>
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Enter email"
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="block text-gray-700">Phone Number:</label>
                    <input
                        type="tel"
                        className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Enter phone number"
                    />
                </div>
            </div>
        </form>
    );
}

export default PersonalInfo;
