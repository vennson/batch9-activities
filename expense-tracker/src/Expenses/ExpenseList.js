import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
// import ExpensesFilter from './ExpenseFilter'
// import React, { useState } from 'react'

const ExpensesList = (props) => {

  return (
    <ul className='expenses-list'>
      {/* <ExpensesFilter onFilter={props.onFilter}/> */}
      {
        props.items.map((item, index) => (
          <ExpenseItem key={index} title={item.title} date={item.date} amount={item.amount}/>
        ))
      }
    </ul>
  )
}

export default ExpensesList