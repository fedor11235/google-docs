import { useEffect, useState  } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionLogout } from '../store/auth'
import '../assets/css/Textarea.css'
import api from '../api'

// const INTERVAL_MS = 2000

function randColor() {
    const
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256))
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color 
}

const TextComponent = (props) => {
    let [innerHTML, setInnerHTML] = useState()
    // let [text, setText] = useState(['Поп', <span className="cursor"></span>, 'понятно ляля какашка'])
    let [otherId, setOtherId] = useState()
    let [text, setText] = useState()
    let [cursorPosition, setCursorPosition] = useState(0)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginPerson = useSelector(state => state.login)

    //получение айди других клиентов
    useEffect(() => {
        if (props.socket === undefined || text === '') return

        props.socket.once('get-list-id', otherIdRes => {
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

        props.socket.emit('set-document', loginPerson)
        }, [text])

    //прием изменение текста с сервера
    useEffect(() => {
        if (props.socket === undefined || innerHTML === '') return
        changesCaretPosition()
        
        props.socket.on('receive-changes', innerHTMLServe =>{
            setInnerHTML(innerHTMLServe)
        })
    })

    function nodeWalk(node, func) {
        let result = func(node)
        for(node = node.firstChild; result !== false && node; node = node.nextSibling)
            result = nodeWalk(node, func)
        return result
        }

    function getCaretPosition(elem) {
        const selection = document.getSelection()
        let cursorLength = 0

        if(selection.anchorNode === elem)
        cursorLength = selection.anchorOffset;
        else {
            const nodesFind = selection.anchorNode;
            if(!elem.contains(selection.anchorNode))
                return undefined;
            else {
                nodeWalk(elem, function(node) {
                    if(node === nodesFind)  return false
                    if(node.textContent && !node.firstChild)  cursorLength += node.textContent.length    
                })
                cursorLength += selection.anchorOffset
            }
        }
        return cursorLength
    }

    function changesCaretPosition (){
        const textarea = document.getElementById('textarea')
        const selection = document.getSelection()
        const range = document.createRange()

        range.collapse(true)
        selection.removeAllRanges()

        for (let i = 0; i< textarea.childNodes.length; i+=1){
            
            if(i===0) 
                if (textarea.childNodes[i].length >= cursorPosition)  range.setStart(textarea.childNodes[0], cursorPosition )

            
            if(i%2===0 && i!==0)
                if (textarea.childNodes[i].length >= cursorPosition) {
                    const childCursorPosition = cursorPosition-textarea.childNodes[i-2].length
                    if(childCursorPosition>=0) range.setStart(textarea.childNodes[i], childCursorPosition); 
                }
        }

        selection.addRange(range)
    }    

    async function submitPost (evt) {
        evt.preventDefault()

        const obgReq = {login: loginPerson, content: text}
        const response = await api.posts.createPosts(obgReq)

        if (response.data.successfully) {
            alert('You sent the post')
        }
        else alert('The shipment was unsuccessful')
    }

    function logOut(evt) {
        evt.preventDefault()
        alert('logged out')
        dispatch(actionLogout())
        navigate('/form') 
        props.socket.emit('delete-document', loginPerson)
    }

    function inpytText(evt) {
        setText(evt.target.textContent)
        setCursorPosition(getCaretPosition(evt.target))

        
        props.socket.emit('send-changes', {innerHTML: evt.target.innerHTML, cursorPosition: cursorPosition})
        props.socket.emit('save-document', evt.target.textContent)
    }


    return (
        <div>
            <h3>Hi! {loginPerson} </h3>
            <div className="others">
                {otherId?.map((elem, index) => (<div className="other-id" key={index} style = { {background: elem.color} } ></div>))}
            </div>
            <form onSubmit={submitPost}>
                <div 
                    id="textarea"
                    contentEditable ="true"
                    suppressContentEditableWarning 
                    onInput={inpytText}
                    dangerouslySetInnerHTML={{__html: innerHTML}}
                >
                </div>
                <input type="submit"  value="Send" />
                <button onClick={logOut}>Log out</button>
            </form>           
        </div>

    )
}

export default TextComponent