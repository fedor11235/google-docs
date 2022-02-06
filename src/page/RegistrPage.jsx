import '../assets/css/form.css'
import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionAuth } from '../store/auth'
import api from '../api'

const RegistrPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function createUser(evt) {
        evt.preventDefault();

        const obgReq = {login: login, password: password}
        const response = await api.auth.register(obgReq)

        if (response.data.successfully) {
            alert('registration successfully')
            dispatch(actionAuth())
            navigate('/form')
        }
        else alert('The login you entered already exists')
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={createUser}>
                <label htmlFor="login">Come up with a login</label>
                <input type="text" id="login" placeholder='Login' value={login} onChange={evnt => setLogin(evnt.target.value)}/>

                <label htmlFor="password">Come up with a password</label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={evnt => setPassword(evnt.target.value)}/>

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegistrPage