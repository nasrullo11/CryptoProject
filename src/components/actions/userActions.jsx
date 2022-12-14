import axios, { axios2 } from '../axios'
import * as authTypes from '../actionTypes/userActionTypes'
import { handleType } from './handleType'

export const postAuth = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/', {
        username: username,
        password: password
      })
      dispatch(handleType(authTypes.AUTH_SUCCES, response.data))
    } catch (e) {}
  }
}

export const logoutHandler = (response) => {
  return async (dispatch) => {
    try {
      const rsp = await axios2.post('logout', {
        refresh_token: response.refresh
      }, {
        headers: {Authorization: `Bearer ${response.access}`}
      })
      dispatch(handleType(authTypes.LOG_OUT, rsp.data))
    } catch (e) {}
  }
}
