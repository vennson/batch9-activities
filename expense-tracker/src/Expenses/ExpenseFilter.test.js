import { render, screen, fireEvent, getSuggestedQuery } from '@testing-library/react';
import ExpenseFilter from './ExpenseFilter'

it('check expense filter label', () => {
  const { queryByText } = render(<ExpenseFilter/>)
  const yearLabel = queryByText('Filter by year')
  expect(yearLabel).toBeTruthy()
})

// describe('changing filter values', () => {
//   it('onChange', () => {
//     const { queryAllByTitle } = render(<ExpenseFilter/>)
//     const filterBtn = queryAllByTitle('selectFilter')
//     expect()
//     fireEvent.change(filterBtn, { target: { value: '2019' } })
//   })
// })

