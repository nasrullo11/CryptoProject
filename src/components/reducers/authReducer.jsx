import * as authTypes from '../actionTypes/userActionTypes'

const initState = {
  loading: false,
  error: '',
  response: null,
  token: null,
  access: null,
}

export const AuthReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case authTypes.AUTH_START:
      return { ...state, loading: true }
    case authTypes.AUTH_SUCCES:
      return { ...state, loading: false, response: payload }
    case authTypes.SET_TOKEN:
      return { ...state, loading: false, token: payload }
    case authTypes.SET_REFRESH:
      return { ...state, loading: false, access: payload.access }
    case authTypes.AUTH_FAIL:
      return { ...state, loading: false, error: payload }
    case authTypes.LOG_OUT:
      return {
        loading: false,
        error: '',
        response: null,
        token: null,
        access: null,
      }
    default:
      return state
  }
}
