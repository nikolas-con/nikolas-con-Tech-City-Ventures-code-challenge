import React from 'react'
import './style.css'

const RegisterForm = ({ handleLogin, handleOnChange})=> {
  return (
    <form className="register-form">
      <input onChange={handleOnChange} className="register-inputs" type="text" placeholder="Enter Your Name" name="firtName" required/>
      <input onChange={handleOnChange} className="register-inputs" type="email" placeholder="Enter Your Surname" name="lastName" required/>
      <input onChange={handleOnChange} className="register-inputs" type="email" placeholder="Enter Email" name="email" required/>
      <input onChange={handleOnChange} className="register-inputs" type="password" placeholder="Enter Password" name="password" required/>
      <button onClick={handleLogin} className="register-button" type="submit">Register</button>
    </form>
  )
}

export default RegisterForm