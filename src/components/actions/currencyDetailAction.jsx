import React from 'react'
import { axios2 } from '../axios'
import { handleType } from './handleType'
import * as currencyDetailTypes from '../actionTypes/currencyDetailActionTypes'

export const currencyDetailAction = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios2.get(`/crypto-detail/${id}`)
            dispatch(handleType(currencyDetailTypes.CRYPTO_DETAIL_SUCCESS, response.data))
        } catch (e) {}
    }
} 