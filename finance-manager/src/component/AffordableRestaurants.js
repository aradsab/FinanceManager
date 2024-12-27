import NavBar from "./NavBar";
import { useState } from "react";

function AffordableRestaurants() {
    const [location, setLocation] = useState("");
    const [dailyBudget, setDailyBudget] = useState(50); // Example default value
    const [restaurants, setRestaurants] = useState([]);

    const handleGoClick = () => {
        // Mock logic to find restaurants based on budget
        const affordableRestaurants = [
            { name: "Bistro Cafe", cost: 20 },
            { name: "Grill House", cost: 15 },
            { name: "Noodle Corner", cost: 10 },
        ].filter((restaurant) => restaurant.cost <= dailyBudget);

        setRestaurants(affordableRestaurants);
    };

    return (
        <div>
            <NavBar />
            <div className="text-center mt-6">
                <h2 className="text-2xl font-bold">Affordable Nearby Restaurants</h2>
            </div>
            <div className="flex flex-col items-center mt-6 space-y-6">
                <div className="w-full max-w-md">
                    <label className="block text-lg font-semibold mb-2">
                        Current Location:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your current location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    onClick={handleGoClick}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                    GO
                </button>
                <div className="w-full max-w-md">
                    <h3 className="text-lg font-semibold mb-2">Daily Budget Remaining: ${dailyBudget}</h3>
                    <h4 className="text-lg font-semibold mb-2">Restaurants You Can Afford:</h4>
                    <ul className="list-disc ml-6 space-y-2">
                        {restaurants.length > 0 ? (
                            restaurants.map((restaurant, index) => (
                                <li key={index}>
                                    {restaurant.name} - ${restaurant.cost}
                                </li>
                            ))
                        ) : (
                            <p>No restaurants match your budget.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AffordableRestaurants;
