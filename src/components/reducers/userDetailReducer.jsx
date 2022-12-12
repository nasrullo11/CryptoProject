import * as userDetailTypes from '../actionTypes/userDetailActionTypes'

const initState = {
    loading: false,
    userDetail: null,
    error: ''
}

export const UserDetailReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case userDetailTypes.USER_DETAIL_LOADING:
            return { ...state, loading: true }
        case userDetailTypes.USER_DETAIL_SUCCESS:
            return { ...state, loading: false, userDetail: payload }
        case userDetailTypes.USER_DETAIL_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}