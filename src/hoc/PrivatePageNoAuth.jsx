import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivatePage = (props) => {

    const auth = useSelector(state => state.auth)
    console.log(auth,'!!!!!!!!!!!!!!!!')

    if(auth) {
        console.log(auth,'ssssssssssssss!')
        return <Navigate to='/form' />
    }

    return props.children
}

export default PrivatePage