import NavBar from './component/NavBar';
import './App.css';
import TransactionForm from "./component/TransactionFrom";
import PersonalInfo from "./component/PersonalInfo";

function App() {
  return (
      <div>
          <NavBar />
          <PersonalInfo />
          <TransactionForm />
      </div>
  );
}

export default App;
