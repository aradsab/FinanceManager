import NavBar from './component/NavBar';
import './App.css';
import TransactionForm from "./component/TransactionFrom";
import PersonalInfo from "./component/PersonalInfo";
import ExpenseForm from "./component/ExpenseForm";
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Suggestion from "./component/Suggestion";
import AffordableRestaurants from './component/AffordableRestaurants';

function App() {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="flex flex-col h-screen justify-between">
                        <NavBar />
                        <div className="flex-grow">
                            <PersonalInfo />
                            <TransactionForm />
                            <ExpenseForm />
                        </div>
                        <div className="flex justify-center mb-6">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    navigate('/suggestions');
                                }}
                            >
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                }
            />
            <Route path="/suggestions" element={<Suggestion />} />
            <Route path="/restaurants" element={<AffordableRestaurants />} />
        </Routes>
    );
}

export default App;
