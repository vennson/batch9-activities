import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  const [showAddExpense, setShowAddExpense] = useState(false)
  const showAddExpenseHandler = () => {
    setShowAddExpense(!showAddExpense)
  }
  
  return (
    <div className='new-expense'>
      { showAddExpense && 
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onShowAddExpenses={showAddExpenseHandler} 
        /> 
      }
      { !showAddExpense && 
        <button onClick={showAddExpenseHandler}>
          New Expense
        </button> 
      }
    </div>
  )
}

export default NewExpense
