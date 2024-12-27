import NavBar from './component/NavBar';
import './App.css';
import TransactionForm from "./component/TransactionFrom";
import PersonalInfo from "./component/PersonalInfo";
import ExpenseForm from "./component/ExpenseForm";

function App() {
  return (
      <div>
          <NavBar />
          <PersonalInfo />
          <TransactionForm />
          <ExpenseForm />
      </div>
  );
}

export default App;
