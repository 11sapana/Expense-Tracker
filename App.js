import React, { Component, useState } from 'react';
import './Style.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transaction from './components/Transactions';

function App() {

  const [transaction, setTransaction] = useState([
    // {id:1,text: 'Tea',amount: -20},
    // {id:2,text: 'Bag',amount: -100},
    // {id:3,text: 'Salary' , amount: 5000},
    // {id:4,text: 'Bonus' , amount: 1500}
  ])
  return (
    <>
      <div className='fi'>
        <p1>Expense Tracker</p1>
      </div>

      <div className='App'>
        <div>
          <Balance transaction={transaction} />
          <ExpenseCard transaction={transaction} />
          <NewTransaction setTransaction={setTransaction} />
        </div>
        <div>
          <Transaction transaction={transaction} />
        </div>
      </div>

    </>

  );
}

export default App;
