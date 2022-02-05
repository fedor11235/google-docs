import { Routes, Route } from 'react-router-dom'

import MainPage from '../page/MainPage'
import NotFoundPage from '../page/NotFoundPage'
import LoginPage from '../page/LoginPage'
import FormPage from '../page/FormPage'
import RegistrPage from '../page/RegistrPage'

import PrivatePage from '../hoc/PrivatePage'


function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegistrPage />}/>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/main" element={
          <PrivatePage>
            <FormPage />
          </PrivatePage>
        }/>
      </Routes>
    ) 
}

  
export default AppRoutes