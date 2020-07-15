import React, {useState, useEffect} from 'react'
import RegisterFrom from '../../components/forms/RegisterForm'
import { useDispatch } from 'react-redux'
import {register} from '../../store/actions'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'




const Register = ()=> {
  const { user } = useSelector(state => state)
  
  const history = useHistory()

  useEffect(() => {
    if (user.jwt)
      history.replace('/')
  }, [user.jwt])

  const [userInformation, setUserInformation] = useState({})

  const handleOnChange = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(register(userInformation))
  }
  const regisertFormProps = { handleRegister, handleOnChange }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <RegisterFrom {...regisertFormProps}/>
    </div>
  )
}

export default Register