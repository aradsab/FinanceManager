import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Finance Manager</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/suggestions')}
                        className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
                    >
                        Suggestions
                    </button>
                    <button
                        onClick={() => navigate('/restaurants')}
                        className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
                    >
                        Nearby Restaurants
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
