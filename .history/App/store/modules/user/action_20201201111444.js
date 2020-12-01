import * as types from './constant'
import { actions } from '../'
import AsyncStorage from '@react-native-community/async-storage'
/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

export const login = (username, password) => {

  return dispatch => {
    dispatch(actions.app.loading())
    setTimeout( async () => {
      if (username === 'admin' && password === 'secret') {
       
        await AsyncStorage.setItem('userData',username);
        let userValid = '';
    
        dispatch({
          type: types.LOGIN,
          
          payload: {
            userId: username,
            fullName: 'CEO LOGIN',
            userStored:userValid
          }
        })
      }
      // turn loading animation off
      dispatch(actions.app.loading(false))
    }, 3000)
  }
}

/**
* Sign out.
*/
export const logout =  () => {
  // direct/sync call
  AsyncStorage.clear()
  return {
      type: types.LOGOUT
  }
}
