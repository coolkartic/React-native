import * as types from './constant'
import { actions } from '../'
import AsyncStorage from '@react-native-community/async-storage'
import { concatSeries } from 'async'
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
        const data = {"records": { "emis_username": "state", "emis_password": "spdssa2018" } }
        
        let response = await fetch('https://emislogin.tnschools.gov.in/emis_login/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             Authorization :'EMIS_web@2019_api'
          },
          body: JSON.stringify(data)
        });
        console.log(response, '-------response');
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
