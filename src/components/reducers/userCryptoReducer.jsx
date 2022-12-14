import * as userCryptoTypes from '../actionTypes/userCryptoActionTypes'

const initState = {
    loading: false,
    userCrypto: [],
    error: ''
}

export const UserCryptoReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case userCryptoTypes.USER_CRYPTO_LOADING:
            return { ...state, loading: true }
        case userCryptoTypes.USER_CRYPTO_SUCCESS:
            return { ...state, loading: false, userCrypto: payload }
        case userCryptoTypes.USER_CRYPTO_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}