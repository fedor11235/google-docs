import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFoundPage";
import Login from "../components/Login";
import Main from "../components/Main";
import Register from "../components/Registration";


function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    ) 
}

  
export default AppRoutes;