import '../assets/css/button.css'
import { useEffect, useState  } from "react"
import {io} from 'socket.io-client'
import Text from '../components/Text'
import '../assets/css/Textarea.css'

// import Quill from 'quill';
// import { useCallback, useEffect, useState } from "react"

function randColor() {
    const
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256))
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color 
}

const MainPage = () => {

    let [socket, setSocket] = useState()

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
   
                <div className="textarea">
                    <Text documentId = {0} socket={socket} color={randColor()}/>
                </div>
                
                <input type="submit"  value='Send' />
            </form>
            <button>Log out</button>
        </div>
    )
}

export default MainPage