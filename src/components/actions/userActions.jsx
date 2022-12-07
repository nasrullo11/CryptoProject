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

export const refreshToken = (data, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios2.post('refresh/', data)
      dispatch(handleType(authTypes.SET_REFRESH, response.data))
      navigate('/dashboard')
    } catch (e) {}
  }
}

export const logoutHandler = (data) => {
  return async (dispatch) => {
    try {
      dispatch(handleType(authTypes.LOG_OUT, data))
    } catch (e) {}
  }
}
