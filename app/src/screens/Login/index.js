import React, { useState, useEffect } from 'react'
import LoginForm from '../../components/forms/LoginForm'
import { login } from '../../store/actions'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'



const Login = () => {
  const { user } = useSelector(state => state)

  const dispatch = useDispatch()

  const history = useHistory()
  
  useEffect(() => {
    if (user.jwt)
      history.replace('/')
  }, [user.jwt])
  const [userCredentials, setUserCredentials] = useState({})

  const handleOnChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(userCredentials))
  }
  const loginFormProps = { handleLogin, handleOnChange }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <LoginForm {...loginFormProps} />
    </div>
  )
}

export default Login