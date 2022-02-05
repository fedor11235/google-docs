import '../assets/Form.css'
import { useLocation, useNavigate} from 'react-router-dom'
// import api from '../api'
import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { actionAuth } from '../store/auth'


const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const fromPage = location.state?.from?.pathname || '/main'

    async function logInUser(evt) {
        evt.preventDefault();

        const obgReq = {login: login, password: password}
        const response = await fetch('http://localhost:5000/api/login-person', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obgReq)
          })

        const parsed = await response.json()
        // console.log(parsed)

        if (parsed.successfully) {

            alert('Loging successfully')
            dispatch(actionAuth())
            console.log(fromPage)
            navigate(fromPage, {replace: true})
        }
        else alert('Incorrect login or password')
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={logInUser}>
                <label htmlFor="login">Come up with a login</label>
                <input type="text" id="login" placeholder='Login' value={login} onChange={evnt => setLogin(evnt.target.value)}/>

                <label htmlFor="password">Come up with a password</label>
                <input type="password" id="password" placeholder='Password' value={password} onChange={evnt => setPassword(evnt.target.value)}/>

                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage