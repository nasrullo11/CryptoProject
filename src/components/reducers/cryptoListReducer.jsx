import * as cryptoListTypes from '../actionTypes/cryptoListActionTypes'

const initState = {
    loading: false,
    cryptoList: [],
    error: ''
}

export const CryptoListReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case cryptoListTypes.CRYPTO_LIST_LOADING:
            return { ...state, loading: true }
        case cryptoListTypes.CRYPTO_LIST_SUCCESS:
            return { ...state, loading: false, crypto: payload }
        case cryptoListTypes.CRYPTO_LIST_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}