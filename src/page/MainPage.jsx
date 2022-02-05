import '../assets/css/button.css'
import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

const MainPage = () => {

    return (
        <div class='main'>
            <button>Log in</button>
            <button>Registration</button>
        </div>
    )
}

export default MainPage