import React from 'react'
import { axios2 } from '../axios'
import { handleType } from './handleType'
import * as userDetailTypes from '../actionTypes/userDetailActionTypes'

export const userDetailAction = (access) => {
    return async (dispatch) => {
        try {
            const response = await axios2.get("/user-detail",
                {Authorization: `Bearer ${access}`}
            )
            dispatch(handleType(userDetailTypes.USER_DETAIL_SUCCESS, response.data))
        } catch (e) {}
    }
} 