import { useLocation, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivatePage = (props) => {

    const location = useLocation()
    const auth = useSelector(state => state.auth)

    if(!auth) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return props.children

}

export default PrivatePage