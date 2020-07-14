import { AUTHENTICATION_APP, CREATE_TASK, GET_TASK } from '../actions/types'
const jwt = localStorage.getItem("token")
const initialState = {
  user: { jwt },
  tasks: null
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case AUTHENTICATION_APP:
      return {
        ...state,
        user: {...actions.payload}
      } 
    case CREATE_TASK:
      const newTask = [...state.tasks]
      newTask.push(actions.payload.task)
      return {
        ...state,
        tasks: [...newTask]
      }
    case GET_TASK:
      return {
        ...state,
        tasks: [...actions.payload.tasks]
      }    
    default: 
      return state
  }
}

export default reducer