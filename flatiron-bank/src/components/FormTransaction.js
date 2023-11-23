import React from "react";
import { useState } from "react";

//function to add a new transaction from a form input to the DOM table
function FormTransaction({onSubmit}){
    const[date, setDate] = useState('')
    const [description, setDescription] = useState('');
    const[category, setCategory] = useState('')
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ date, description, category, amount });
      setDate('')
      setDescription('')
      setCategory('')
      setAmount('')
    }


return(
  <div className="transaction-form">
    <form onSubmit={handleSubmit}>
      <h2>Add a Transaction</h2>
      <input type='date' 
      name='date' value={date} 
      placeholder='date' 
      onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  </div>
)

}
export default FormTransaction;