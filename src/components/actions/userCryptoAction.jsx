import React from 'react'
import { axios2 } from '../axios'
import { handleType } from './handleType'
import * as userCryptoTypes from '../actionTypes/userCryptoActionTypes'

export const userCryptoAction = (access) => {
    return async (dispatch) => {
        try {
            const response = await axios2.get('user-crypto', {
                headers: { Authorization: `Bearer ${access}` }
            })
            dispatch(handleType(userCryptoTypes.USER_CRYPTO_SUCCESS, response.data))
        } catch (e) {}
    }
}