import * as currencyDetailTypes from '../actionTypes/currencyDetailActionTypes'

const initState = {
    loading: false,
    currencyDetail: {},
    error: ''
}

export const CurrencyDetailReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case currencyDetailTypes.CRYPTO_DETAIL_LOADING:
            return { ...state, loading: true }
        case currencyDetailTypes.CRYPTO_DETAIL_SUCCESS:
            return { ...state, loading: false, currencyDetail: payload }
        case currencyDetailTypes.CRYPTO_DETAIL_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}