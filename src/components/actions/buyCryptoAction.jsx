import axios, { axios2 } from '../axios'
import * as buyCryptoTypes from '../actionTypes/buyCryptoActionTypes'
import { handleType } from './handleType'


export const BuyCryptoAction = (access, data) => {
    return async (dispatch) => {
        try {
            console.log(data)
            const rsp = await axios2.post('buy', {
                count: data.count,
                crypto: data.crypto,
                price: data.price
            }, {
                headers: {Authorization: `Bearer ${access}`}
            })
            dispatch(handleType(buyCryptoTypes.BUY_CRYPTO_SUCCESS, rsp.data))
        } catch (e) {}
    }
}