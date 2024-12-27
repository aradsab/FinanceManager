import NavBar from './component/NavBar';
import './App.css';
import TransactionForm from "./component/TransactionFrom";
import PersonalInfo from "./component/PersonalInfo";
import ExpenseForm from "./component/ExpenseForm";
import MonthlyBudget from './component/MonthlyBudget';
import AmountSpent from './component/AmountSpent';

function App() {
  return (
      <div>
          <NavBar />
          <PersonalInfo />
          <TransactionForm />
          <ExpenseForm />
          <MonthlyBudget />
          <AmountSpent />
      </div>
  );
}

export default App;
