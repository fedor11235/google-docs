import '../assets/css/button.css'
import '../assets/css/Textarea.css'

import { useEffect, useState  } from "react"
import {io} from 'socket.io-client'
import TextComponent from '../components/TextComponent'


const MainPage = () => {

    const [socket, setSocket] = useState()

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)
        return () => {
            s.disconnect()
        }
      }, [])
    
    return (
        <div>
            <TextComponent socket={socket} />
        </div>
    )
}

export default MainPage