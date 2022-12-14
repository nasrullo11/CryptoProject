import "../css/bloc1.css"
import logo from "../img/logo.png" 
import bannerbg from "../img/banner-bg.png"
import c1 from "../img/c1.png"
import c2 from "../img/c2.png"
import c3 from "../img/c3.png"
import c4 from "../img/c4.png"
import c5 from "../img/c5.png"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import axios from "./axios"
import { useEffect } from "react"
import { userDetailAction } from "./actions/userDetailAction"
import Dropdown from "./Dropdown/Dropdown";

const Bloc1 = () => {
  const [count, usecount] = useState(true)
  const { response, loading } = useSelector((state) => state.auth)
  const [log, setLog] = useState("Login")
  const userDetail = useSelector((state) => state.uerDetail)

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.documentElement.scrollTop > 150) {
      usecount(false)
    } else {
      usecount(true)
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(userDetailAction(response?.access))
  }, [response])

  // const login = () => {
  //   if(response) {
  //     setLog("Logout")
  //   }
  // }

  if (loading) return <div>Loading...</div>

  if (userDetail) console.log(userDetail)

  return (
    <div id="home">
        <div className="bloc1">
          <div className={count ? "sm-bloc1_1" : "sm-bloc1_11 sm-bloc1_1"}>
            <div className="sms-bloc1">
              <div className="logo">
                <Link to='/'>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="text">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span><a href="#about">About</a></span>
                <span><a href="#faq">Faq</a></span>
                <span style={{height: response ? '24px' : ''}}>
                  {!response ? <a href="#log">Login</a> : <Dropdown />}
                </span>
                {!response ? (
                    <a href="#log">
                      <button>Investing</button>
                    </a>
                ) : (
                    <Link to='/bloc'>
                      <button>Investing</button>
                    </Link>
                )}
              </div>
            </div>
          </div>
          <div className="sm-bloc1_2">
              <h1>Blockchain Future Technology</h1>
              <p>Accusantium asperiores consectetur exercitationem fugiat harum provident quisquam reiciendis repudiandae.</p>
              <button>GET NOTIFIED</button>
              <span>Need help? <span><a href="#log">Register Now</a></span></span>
          </div>
          <div className="sm-bloc1_3">
            <img src={c1} alt="" />
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
            <img src={c5} alt="" />
          </div>
          <div className="bg-pos">
            <img src={bannerbg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Bloc1