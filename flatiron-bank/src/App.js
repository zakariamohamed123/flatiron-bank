
import './App.css';
import {useState, useEffect} from 'react';
import FormTransaction from './components/FormTransaction';
import SearchBar from './components/SearchBar';
import TableTransaction from './components/TableTransaction';

//main function
function App() {

  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

//retriving data from the db
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/martinwakaba/flatiron/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

//function to add a new transaction from a form input
  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
//function to filter the transactions by the description
  const filteredTransactions = transactions
    ? transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

//function to delete the transaction by it's id
  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  }

//rendering some key components
  return (
    <div className="App">
      <FormTransaction  onSubmit={addTransaction} />
      <SearchBar onSearch={setSearchTerm} />
      <TableTransaction transactions={filteredTransactions} onDelete={deleteTransaction} />
      
      
    </div>
  );
}

export default App;