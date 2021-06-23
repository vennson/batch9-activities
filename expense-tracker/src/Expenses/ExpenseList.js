import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
// import ExpensesFilter from './ExpenseFilter'
// import React, { useState } from 'react'

const ExpensesList = (props) => {

  return (
    <ul className='expenses-list'>
      {/* <ExpensesFilter onFilter={props.onFilter}/> */}
      { props.items.length > 0 &&
        props.items.map((item, index) => (
          <ExpenseItem key={index} title={item.title} date={item.date} amount={item.amount}/>
        ))
      }
      { props.items.length === 0 && <div className='expenses-list__fallback'>No Item</div> }
    </ul>
  )
}

export default ExpensesList