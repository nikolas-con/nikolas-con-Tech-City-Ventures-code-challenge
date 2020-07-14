import { AUTHENTICATION_APP, CREATE_TASK, GET_TASK } from './types'
import axios from 'axios'

const login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/auth/login', user, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
      localStorage.clear()
      localStorage.setItem("token", response.data.token)
      dispatch({ type: AUTHENTICATION_APP, payload: { jwt: response.data.token } })
    } catch (error) {
      console.log(error)
    }
  }
}
export { login }
