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
    default: 
      return state
  }
}

export default reducer