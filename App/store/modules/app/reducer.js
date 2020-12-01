import { handleActions } from 'redux-actions'
import { SET_LOADING } from './constant'


const initialState = {   loading: false }


// handle actions
export default handleActions(
  {
    [SET_LOADING]: (state= initialState, action) =>{
      return {
        loading: action.payload
      }
    }
  },
initialState
)

