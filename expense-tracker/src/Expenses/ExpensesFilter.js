import './ExpensesFilter.css'
import React, { useState } from 'react'

const ExpensesFilter = (props) => {
  const [filterValue, setYearValue] = useState('None')

  const filterItems = (event) => {
    props.onFilter(event.target.value)
    setYearValue(event.target.value)
  }

  return (
    <div className='expenses-filter expenses-filter__control'>
      <label>Filter by year</label>
      <select name='years' id='years' onChange={filterItems} value={filterValue}>
        <option value='None'>None</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
      </select>
    </div>
  )
}

export default ExpensesFilter