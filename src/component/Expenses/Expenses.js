import React, { useState } from "react"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"


const Expenses = (props)=>{
const [selectedYear, setSelectedYear] = useState('2020')

 const changeHandlerValue = (optionValue)=>{
    setSelectedYear(optionValue)
  }

  const filteredExpenses = props.items.filter((item)=> item.date.getFullYear().toString() === selectedYear)

  return (
   <div>
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear} onSelectChange={changeHandlerValue} />
    <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
 )
}

export default Expenses