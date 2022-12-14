import React, { useEffect, useState } from 'react'
import "../css/bloc8.css"
import { Icon } from '@iconify/react';
import log from "../img/login-img.jpg"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { postAuth } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { axios2 } from './axios';
import { userDetailAction } from './actions/userDetailAction';

const Bloc8 = () => {
    const [count, usecount] = useState(true)
    const [count1, usecount1] = useState(true)
    const [msg, setMsg] = useState('')
    const [name, setName] = useState()

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [registerForm, setRegisterForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password1: '',
        password2: '',
        email: ''
    })
    const cou = () =>{
        usecount(current => !current)
    }
    
    const cou1 = () =>{
        usecount1(current1 => !current1)
    }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = () => {
    dispatch(postAuth(loginForm.username, loginForm.password))
    navigate('/bloc')
  }

  const register = () => {
    axios2.post('register', {
        first_name: registerForm.first_name,
        last_name: registerForm.last_name,
        email: registerForm.email,
        username: registerForm.username,
        password1: registerForm.password1,
        password2: registerForm.password2,
    }).then((res) => {
        console.log(res)
        if (res.data.message === 'user created') {
            cou()
            cou1()
        }
        else {
            if (res.data.message === 'Parol xato') {
                setMsg('Passwords are not same!')
            }
            else{
                setMsg(res.data.message + '!')
            }
        }
    })
  }

  return (
    <div id='log'>
        <div className="bloc8">
            <div className="sm-bloc8_1" onClick={cou}>
                <span>
                    <h1>
                        Register
                    </h1>
                    <span>Join the new era of cryptocurrency exchange </span>
                </span>
                <Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="20" height="24" />
            </div>
            <div className="sm-bloc8_2" onClick={cou1}>
                <span>
                    <h1>
                        Sign in
                    </h1>
                    <p>Join the new era of cryptocurrency exchange </p>
                </span>
                <Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="20" height="24" />
            </div>
        </div>
        <div className={count ? "modal" : "modal false"} onClick={cou}>
            <div className="sm-modal" onClick={e => e.stopPropagation()}>
                <img src={log} alt="" width="292" height="502"/>
                <div className="login">
                    <h1>REGISTER</h1>
                    {msg !== '' ? <span>{msg}</span> : ''}
                    <input
                        type="text"
                        placeholder='First name'
                        onChange={(e) => setRegisterForm({ ...registerForm, first_name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Last name'
                        onChange={(e) => setRegisterForm({ ...registerForm, last_name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder='email'
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Username'
                        onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setRegisterForm({ ...registerForm, password1: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        onChange={(e) => setRegisterForm({ ...registerForm, password2: e.target.value })}
                    />
                    <button onClick={() => register()}>Registrer</button>
                    <span>Already have an account? <span onClick={() => {cou();cou1()}}>Login</span></span>
                </div>
            </div>
        </div>
        <div className={count1 ? "modal1" : "modal1 false1"} onClick={cou1}>
            <div className="sm-modal1" onClick={e => e.stopPropagation()}>
                <img src={log} alt="" width="304" height="429"/>
                <div className="login login1">
                    <h1>LOGIN</h1>
                    <input
                        type="text"
                        placeholder='Enter username'
                        onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder='Enter password'
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                    <button onClick={() => login()}>Login</button>
                    <span><span onClick={() => {cou1();cou()}}>Create New Account</span></span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Bloc8