
import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from './constant'


const initialState= {
  loggedIn: false,
  userId: '',
  fullName: '',
  userStored:''
}

export default handleActions(
  {
    [LOGIN]: (state= initialState, action) => {
      const p = action.payload

       return {
        loggedIn: true,
        userId: p.userId,
        fullName: p.fullName,
        userStored:p.userStored
      }
      
    },

    [LOGOUT]: (state=initialState)  => {
      
      return {
        loggedIn: false
      }
    }
  },
  
  initialState
)

