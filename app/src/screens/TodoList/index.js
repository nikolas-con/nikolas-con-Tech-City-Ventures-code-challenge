
import React, { useState, useEffect } from 'react'
import TaskForm from '../../components/forms/TaskForm'
import {createTask, getTask } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TasksList from '../../components/TasksList'
import './style.css'

const TodoList = ()=> {
  const dispatch = useDispatch()

  const { user, tasks } = useSelector(state => state)

  useEffect(()=>{
    dispatch(getTask(task, user.jwt))
  },[])
  
  const history = useHistory()

  useEffect(() => {
    if (!user.jwt)
      history.replace('/login')
  }, [user.jwt])

  const [task, setTask] = useState({})

  const handleOnChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask(task, user.jwt))
  }
  const taskFormProps =  { handleTaskSubmit, handleOnChange }
  const taskListProps =  { tasks }
  return (
    <div className="register-container">
      <h1>Todo List</h1>
      <TaskForm {...taskFormProps}/>
      <TasksList {...taskListProps}/>
    </div>
  )
}

export default TodoList