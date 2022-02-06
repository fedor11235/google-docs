import { Routes, Route } from 'react-router-dom'

import MainPage from '../page/MainPage'
import NotFoundPage from '../page/NotFoundPage'
import LoginPage from '../page/LoginPage'
import FormPage from '../page/FormPage'
import RegistrPage from '../page/RegistrPage'

import PrivatePageAuth from '../hoc/PrivatePageAuth'
import PrivatePageNoAuth from '../hoc/PrivatePageNoAuth'

function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={
          <PrivatePageNoAuth>
            <MainPage />
          </ PrivatePageNoAuth>
        } />

        <Route path="/login" element={
          <PrivatePageNoAuth>
            <LoginPage />
          </ PrivatePageNoAuth>
        }/>

        <Route path="/register" element={
          <PrivatePageNoAuth>
            <RegistrPage />
          </PrivatePageNoAuth>     
        }/>

        <Route path="/form" element={
          <PrivatePageAuth>
            <FormPage />
          </PrivatePageAuth>
        }/>

        <Route path="*" element={
        <NotFoundPage />
        } />

      </Routes>
    ) 
}

  
export default AppRoutes