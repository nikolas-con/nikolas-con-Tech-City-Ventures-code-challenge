import React from 'react'
import './style.css'

const TaskForm = ({  handleTaskSubmit, handleOnChange})=> {
  return (
    <form className="task-form">
      <input onChange={handleOnChange} className="task-inputs" type="text" placeholder="Enter discretion" name="discretion" required/>
      <button onClick={handleTaskSubmit} className="task-button" type="submit">Add</button>
    </form>
  )
}

export default TaskForm