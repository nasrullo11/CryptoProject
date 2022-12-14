import * as buyCryptoTypes from '../actionTypes/buyCryptoActionTypes'

const initState = {
    loading: false,
    error: '',
    response: null,
}

export const BuyCryptoReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case buyCryptoTypes.BUY_CRYPTO_START:
            return { ...state, loading: true }
        case buyCryptoTypes.BUY_CRYPTO_SUCCESS:
            return { ...state, loading: false, response: payload }
        case buyCryptoTypes.BUY_CRYPTO_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}