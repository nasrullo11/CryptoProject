import * as sellCryptoTypes from '../actionTypes/sellCryptoActionTypes'

const initState = {
    loading: false,
    error: '',
    response: null,
}

export const SellCryptoReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case sellCryptoTypes.SELL_CRYPTO_START:
            return { ...state, loading: true }
        case sellCryptoTypes.SELL_CRYPTO_SUCCESS:
            return { ...state, loading: false, response: payload }
        case sellCryptoTypes.SELL_CRYPTO_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}