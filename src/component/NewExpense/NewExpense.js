import React, { useState } from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props)=>{

  const [isEdited, setIsEdited] = useState(false)

  const startEditingHandler = ()=>{
     setIsEdited(true)
  }
 
  const saveExpenseDataHandler = (enteredExpenseData)=>{
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      props.onAddExpense(expenseData)
      setIsEdited(false)
  }

  const stopEditingHandler = ()=>{
   setIsEdited(false)
  }


  return (
    <div className="new-expense">
    {!isEdited &&<button onClick={startEditingHandler}>Add New Expense</button>}
     {isEdited && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel ={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense