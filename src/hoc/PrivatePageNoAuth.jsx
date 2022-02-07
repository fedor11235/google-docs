import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivatePage = (props) => {

    const auth = useSelector(state => state.auth)

    if(auth) {
        return <Navigate to='/form' />
    }

    return props.children
}

export default PrivatePage