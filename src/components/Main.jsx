// import Quill from 'quill';
// import { useCallback, useEffect, useState } from "react"
import { useEffect, useState  } from "react";
import {io} from 'socket.io-client';
import Text from './Text'
import '../assets/Textarea.css';

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
            <form action="">
   
                <div className="textarea">
                    <Text documentId = {0} socket={socket} color={randColor()}/>
                    <Text documentId = {1} socket={socket} color={randColor()}/>
                </div>
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default MainPage;