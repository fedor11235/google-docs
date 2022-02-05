import '../assets/css/form.css'
import React from 'react'
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { actionAuth } from '../store/auth'

// import api from '../api';


const RegistrPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    async function createUser(evt) {
        evt.preventDefault();

        const obgReq = {login: login, password: password}
        const response = await fetch('http://localhost:5000/api/add-person', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obgReq)
          })

        const parsed = await response.json()
        console.log(auth)

        if (parsed.register) {

            dispatch(actionAuth())
            console.log(auth)
            alert('registration successfully', auth)
        }
        else alert('The login you entered already exists', auth)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={createUser}>
                <label htmlFor="login">Come up with a login</label>
                <input type="text" id="login" placeholder='Login' value={login} onChange={evnt => setLogin(evnt.target.value)}/>

                <label htmlFor="password">Come up with a password</label>
                <input type="password" id="password" placeholder='Password' value={password} onChange={evnt => setPassword(evnt.target.value)}/>

                <input type="submit" value='Register' />
            </form>
        </div>
    )
}

export default RegistrPage