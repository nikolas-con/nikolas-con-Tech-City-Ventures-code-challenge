import { AUTHENTICATION_APP, CREATE_TASK, GET_TASK } from './types'
import axios from 'axios'

const login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/login', user, {
        'Content-Type': 'application/json',
      })
      localStorage.clear()
      localStorage.setItem("token", response.data.token)
      dispatch({ type: AUTHENTICATION_APP, payload: { jwt: response.data.token } })
    } catch (error) {
      console.log(error)
    }
  }
}
const register = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/register', user, {
        'Content-Type': 'application/json',
      })
      localStorage.clear()
      localStorage.setItem("token", response.data.token)
      dispatch({ type: AUTHENTICATION_APP, payload: { jwt: response.data.token } })
    } catch (error) {
      console.log(error)
    }
  }
}

const createTask = (task, token)=> {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/tasks/create', task,  {
        headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      }})
      console.log(response.data)
      dispatch({ type: CREATE_TASK, payload: { task: response.data.task } })
    } catch (error) {
      console.log(error)
    }
  }
}
const getTask = (token)=> {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/tasks/get', {
        headers: {
        'Authorization': `Bearer ${token}`
      }})
      dispatch({ type: GET_TASK, payload: { tasks: response.data.tasks } })
    } catch (error) {
      console.log(error)
    }
  }
}

export { login, register, createTask, getTask }