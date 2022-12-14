import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import './Dropdown.css'
import {logoutHandler} from "../actions/userActions";
import {useNavigate} from "react-router-dom";

const Dropdown = () => {

    const { response } = useSelector((state) => state.auth)
    const userDetail = useSelector((state) => state.uerDetail)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(logoutHandler(response))
        navigate('/')
    }

    if (!userDetail.userDetail) return null

    return (
        <div className="dropdown">
            <span className="dropbtn">{userDetail?.userDetail.first_name} {userDetail?.userDetail.last_name}</span>
            <div className="dropdown-content">
                <span onClick={() => logout()}>Logout</span>
            </div>
        </div>
    )
}

export default Dropdown