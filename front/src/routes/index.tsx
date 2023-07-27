import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
    )
}