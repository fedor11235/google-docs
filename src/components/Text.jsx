import { useEffect, useState  } from "react"
import { useSelector } from 'react-redux'
import '../assets/css/Textarea.css'
import api from '../api'

function randColor() {
    const
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256))
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color 
}


const INTERVAL_MS = 2000

const MainPage = (props) => {
    let [text, setText] = useState('')
    let [anotherText, setAnotherText] = useState()
    let [otherId, setOtherId] = useState()

    let otherIds = []

    // const otherId = [{id: 1, color: randColor()}, {id: 2, color: randColor()}, {id: 3, color: randColor()}]
    const idPerson = useSelector(state => state.id)
    const loginPerson = useSelector(state => state.login)


    //загрузка документа
    useEffect(() => {
        if (props.socket === null || text === '') return

    
        props.socket.once("load-document", otherIdRes => {
            otherIdRes.forEach(elemRes => {
                otherId?.map(elemMy => {
                    if(elemMy.id === elemRes.id)
                        {
                            elemRes.color=elemMy.color
                            return
                        }
                })

                if(!elemRes.color) {elemRes.color=randColor()}
            })
            setOtherId(otherIdRes)
        })

        props.socket.emit("get-document", idPerson)
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

      useEffect(()=> {
            console.log('!!!!!!!!!!')
            console.log(otherId)
            otherIds = otherId?.map(elem => <div className="other-id" style = { {background: elem.color} } ></div>)
        },[text, otherId]
      )

    async function submitPost (evt) {
        evt.preventDefault()
        console.log(loginPerson)

        const obgReq = {login: loginPerson, content: text}
        const response = await api.posts.createPosts(obgReq)

        if (response.data.successfully) {
            alert('You sent the post')
        }
        else alert('The shipment was unsuccessful')
    }

    
    return (
        <div>
            <div className="others">
                {otherId?.map(elem => (<div className="other-id" key={elem.id} style = { {background: elem.color} } ></div>))}
            </div>
            <form onSubmit={submitPost}>
                <textarea  
                    contentEditable 
                    suppressContentEditableWarning 
                    onInput={evnt => setText(evnt.target.value)}
                />
                <input type="submit"  value="Send" />
            </form>           
        </div>

    )
}

export default MainPage