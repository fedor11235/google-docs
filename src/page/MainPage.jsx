import '../assets/css/button.css'
import React from 'react'
import { Link } from "react-router-dom"

const MainPage = () => {

    return (
        <div className="main">
            <Link className="link" to="/login">
                <button>Log in</button>
            </Link>
            <Link className="link" to="/register">
                <button>Registration</button>
            </Link>
        </div>
    )
}

export default MainPage