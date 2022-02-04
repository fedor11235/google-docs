// import Quill from 'quill';
// import { useCallback, useEffect, useState } from "react"
import { useEffect, useState  } from "react"
import {io} from 'socket.io-client';

// import { useState  } from "react"
const INTERVAL_MS = 2000
const documentId = 0
const MainPage = () => {
    let [socket, setSocket] = useState()
    let [text, setText] = useState('')

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)
        return () => {
            s.disconnect()
        }
      }, [])


    //сохранение документа
    useEffect(() => {
        if (socket === null || text === '') return 
        const interval = setInterval(() => {
            socket.emit("save-document", text)
        }, INTERVAL_MS)
        return () => {
            clearInterval(interval)
          }
    
      }, [socket, text])


    //загрузка документа
    useEffect(() => {
        if (socket === null || text === '') return
    
        socket.once("load-document", document => {
            // quill.setContents(document)
            // quill.enable()
            setText(document)
        })
        socket.emit("get-document", documentId)
      }, [socket, text])



    ////!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(() => {
        if (socket === null || text === '') return
    
        const handler = delta => {
            setText(document)
        //   quill.updateContents(delta)
        }
        socket.on("receive-changes", handler)
    
        return () => {
          socket.off("receive-changes", handler)
        }
      }, [socket, text])

    // useEffect(() => {
    //     if (socket == null || quill == null) return
    
    //     const handler = (delta, oldDelta, source) => {
    //       if (source !== "user") return
    //       socket.emit("send-changes", delta)
    //     }
    //     quill.on("text-change", handler)
    
    //     return () => {
    //       quill.off("text-change", handler)
    //     }
    //   }, [socket, quill])


    
    return (
        <div>
            <form action="">
                <textarea onChange={(evt) => setText(evt.target.value)}> 
                </textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default MainPage;