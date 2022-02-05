import { useEffect, useState  } from "react";
import '../assets/Textarea.css';

// import { useState  } from "react"
const INTERVAL_MS = 2000

const MainPage = (props) => {
    let [text, setText] = useState('')
    let [anotherText, setAnotherText] = useState('0')

    const stylesObj = { color: props.color };


    //загрузка документа
    useEffect(() => {
        if (props.socket === null || text === '') return
    
        // props.socket.once("load-document", document => {
        //     setTempText(document)
        // })
        props.socket.emit("get-document", props.documentId)
        }, [props.socket, text])

    // сохранение документа
    useEffect(() => {
        if (props.socket === null || text === '') return 
        const interval = setInterval(() => {
            props.socket.emit("save-document", text)
        }, INTERVAL_MS)
        return () => {
            clearInterval(interval)
          }
    
      }, [props.socket, text])


    // сохранение от от других клиентов
    useEffect(() => {
    if (props.socket === null || text === '') return

    const handler = delta => {
        setAnotherText(delta)
    }
    props.socket.on("receive-changes", handler)

    return () => {
        props.socket.off("receive-changes", handler)
    }
    }, [props.socket, text])


    //отправить изменения на другие клиенты
    useEffect(() => {
    if (props.socket === null || text === '') return
    props.socket.emit("send-changes", text)

    return () => {
        
    }
    }, [props.socket, text])


    
    return (
            <span  
            contentEditable 
            suppressContentEditableWarning 
            onInput={evnt => setText(evnt.target.textContent)}
            style = {stylesObj}
            >
                {anotherText}
                
            </span>

    )
}

export default MainPage;