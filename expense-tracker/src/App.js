import React, { useState } from "react";
import "./App.css";
import Expenses from './Expenses/Expenses'
import Card from './UI/Card'

const DUMMY_EXPENSES = [
  {
    title: 'Car Insurance',
    amount: '1000000',
    date: new Date(2018, 5, 19),
  },
  {
    title: 'House Insurance',
    amount: '1000000',
    date: new Date(2019, 6, 19),
  },
  {
    title: 'Computer Insurance',
    amount: '1000000',
    date: new Date(2020, 7, 19),
  },
  {
    title: 'Phone Insurance',
    amount: '1000000',
    date: new Date(2021, 8, 19),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES) 

  const filterExpenses = (year) => {
    if (year !== 'None') {
      const filterResult = DUMMY_EXPENSES.filter(item => (item.date.getFullYear() === parseInt(year)))
      console.log(filterResult)
      setExpenses(filterResult)
    } else {
      setExpenses(DUMMY_EXPENSES)
    }
  }

  return (
    <div className="App">
      <Expenses expenses={expenses} onFilter={filterExpenses}/>
    </div>
  )
};

export default App;