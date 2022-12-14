import * as authTypes from '../actionTypes/userActionTypes'

const initState = {
  loading: false,
  error: '',
  response: null,
}

export const AuthReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case authTypes.AUTH_START:
      return { ...state, loading: true }
    case authTypes.AUTH_SUCCES:
      return { ...state, loading: false, response: payload }
    case authTypes.AUTH_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
