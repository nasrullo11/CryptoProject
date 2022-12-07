import React from 'react'
import { axios2 } from '../axios'
import { handleType } from './handleType'
import * as cryptoListTypes from '../actionTypes/cryptoListActionTypes'

export const cryptoListAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios2.get('/list-crypto')
            dispatch(handleType(cryptoListTypes.CRYPTO_LIST_SUCCESS, response.data))
        } catch (e) {}
    }
}