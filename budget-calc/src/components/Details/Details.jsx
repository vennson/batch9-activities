import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../useTransactions'

import useStyles from './styles'

const Details = ({ title }) => {
  const classes = useStyles()
  const { total, chartData } = useTransactions(title)

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h5'>${total}</Typography>
        <Doughnut 
          data={chartData}
          width={100}
          height={100}
        >
        </Doughnut>
      </CardContent>
    </Card>
  )
}

export default Details