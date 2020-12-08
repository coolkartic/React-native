import * as types from './constant'
import { actions } from '../'
import AsyncStorage from '@react-native-community/async-storage'
import { concatSeries } from 'async';
import { apiClient } from "../../../apiClient/index";

/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

export const login = (username, password) => {

  return dispatch => {
    dispatch(actions.app.loading())
    setTimeout( async () => {
      // console.log(username, password, '------');
      let userValid = '';  
      const data = {"records": { "emis_username": username, "emis_password": password } }
      let response = apiClient
        .post("login", { data })
        .then(response => {
          const {
            token,
          } = response.data;
        
          apiClient.defaults.headers.common.Authorization = token;
          AsyncStorage.setItem("token", token);
        })
        .catch(error => {
          // console.log(error, '-------');
          dispatch({
            type: types.LOGIN,
            payload: {
              userId: username,
              fullName: 'CEO LOGIN',
              userStored:userValid
            }
          })
        });
        console.log(response, '--------responsexxx')
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
