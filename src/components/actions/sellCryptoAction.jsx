import axios, { axios2 } from '../axios'
import * as sellCryptoTypes from '../actionTypes/sellCryptoActionTypes'
import { handleType } from './handleType'


export const SellCryptoAction = (access, data) => {
    return async (dispatch) => {
        try {
            const rsp = await axios2.post('sell', {
                count: data.count,
                crypto: data.crypto,
                price: data.price
            }, {
                headers: {Authorization: `Bearer ${access}`}
            })
            dispatch(handleType(sellCryptoTypes.SELL_CRYPTO_SUCCESS, rsp.data))
        } catch (e) {}
    }
}