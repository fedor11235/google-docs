import { Routes, Route } from 'react-router-dom'

import NotFound from '../components/NotFoundPage'
import Login from '../components/Login'
import Main from '../components/Main'
import Register from '../components/Registration'

import PrivatePage from '../hoc/PrivatePage'


function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<NotFound />} />

        <Route path="/main" element={
          <PrivatePage>
            <Main />
          </PrivatePage>
        }/>
      </Routes>
    ) 
}

  
export default AppRoutes;