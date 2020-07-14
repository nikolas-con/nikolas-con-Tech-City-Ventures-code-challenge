import React from 'react'
import './style.css'

const LoginForm = ({ handleLogin, handleOnChange})=> {
  return (
    <form className="login-form">
      <input onChange={handleOnChange} className="login-inputs" type="email" placeholder="Enter Email" name="email" required/>
      <input onChange={handleOnChange} className="login-inputs" type="password" placeholder="Enter Password" name="password" required/>
      <button onClick={handleLogin} className="login-button" type="submit">Login</button>
    </form>
  )
}

export default LoginForm