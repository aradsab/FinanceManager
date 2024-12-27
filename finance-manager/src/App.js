import NavBar from './component/NavBar';
import './App.css';
import TransactionForm from "./component/TransactionFrom";
import PersonalInfo from "./component/PersonalInfo";
import ExpenseForm from "./component/ExpenseForm";
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Suggestion from "./component/Suggestion";


function App() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior
        navigate('/hk-url'); // Redirect to the desired route
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <NavBar />
                        <PersonalInfo />
                        <TransactionForm />
                        <ExpenseForm />
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            navigate('/suggestions');
                        }}>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                }
            />
            <Route path="/suggestions" element={<Suggestion />} />
        </Routes>
    );
}

export default App;
