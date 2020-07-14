import React from 'react'
import './style.css'

const TasksList = ({tasks}) =>{
  if (tasks) {
    return (
      <div className="task-list">
        {tasks.map(task =>
           <div key={task._id}>
             <input type="checkbox" id={task._id} name={task._id} value={task.isDone}/>
             <label for={task._id}> {task.discretion}</label>
           </div>
         )}
      </div>
    )
  } else {
    return null
  }

}

export default TasksList