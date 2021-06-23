import { useState } from 'react'
import './Expenses.css'
import Card  from '../UI/Card'
import ExpensesList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState('2018')
  const filterChangedHandler = (selectedValue) => {
    setSelectedYear(selectedValue)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // const filterExpenses = (filteredYear) => {
  //   return filterExpenses.length === 0 ? 
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangedHandler} selected={filteredYear}/>
        <ExpensesChart expense={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses