import * as types from './constant'
import { actions } from '../'
import AsyncStorage from '@react-native-community/async-storage'
/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

export const login = (username, password) => {
  
  // async call
  return dispatch => {
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    dispatch(actions.app.loading())
    
    // simulate ajax login
    // in real world you can use `fetch` to make ajax request.
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
