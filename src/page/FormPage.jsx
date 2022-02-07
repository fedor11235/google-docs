import '../assets/css/button.css'
import '../assets/css/Textarea.css'

import { useEffect, useState  } from "react"
import {io} from 'socket.io-client'
import Text from '../components/Text'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionLogout } from '../store/auth'
import api from '../api'


// import Quill from 'quill';
// import { useCallback, useEffect, useState } from "react"

const MainPage = () => {

    const [socket, setSocket] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logOut(evt) {
        evt.preventDefault()
        alert('logged out')
        dispatch(actionLogout())
        navigate('/form') 
    }

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)
        return () => {
            s.disconnect()
        }
      }, [])
    
    return (
        <div>
            <form>
                <Text socket={socket} />
 
                <input type="submit"  value="Send" />
            </form>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default MainPage















    // async function createPosts(evt) {
    //     evt.preventDefault();

    //     // const obgReq = {login: login, password: password}
    //     // const response = await api.posts.createPosts(obgReq)

    //     // if (response.data.successfully) {
    //     //     alert('registration successfully')
    //     //     dispatch(actionAuth())
    //     //     navigate('/form')
    //     // }
    //     // else alert('The login you entered already exists')
    // }