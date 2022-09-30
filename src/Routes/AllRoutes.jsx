import {Routes,Route} from "react-router-dom"
import { Gettrial } from "../Components/Gettrial"
import Home from "../Components/Home"
export default function AllRoutes(){

    return<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gettrial" element={<Gettrial/>}/>
    </Routes>
}