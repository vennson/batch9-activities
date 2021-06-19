import './Expenses.css'
import Card  from '../UI/Card'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  return (
    <div>
      <Card className='expenses'>
        <ExpensesList items={props.expenses} onFilter={props.onFilter}/>
      </Card>
    </div>
  )
}

export default Expenses