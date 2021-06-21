import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  return (
    <div className='expenses-filter expenses-filter__control'>
      <label>Filter by year</label>
      <select 
        onChange={(e) => props.onChangeFilter(e.target.value)} 
        value={props.selected}
      >
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
      </select>
    </div>
  )
}

export default ExpenseFilter