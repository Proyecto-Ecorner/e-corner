

import { Routes, Route } from "react-router-dom";
import Registro2 from "./Pages/Registro2";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Registro2" element={<Registro2/>} /> 
            <Route exact path="/Login" element={<Login/>}/>
        </Routes>
    )
}
 
export default AppRoutes