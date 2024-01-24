import { Route, Routes } from "react-router-dom";
import ProductDetail from "../views/ProductDetail";
import Home from "../views/Home";


const Routing = () => {
    return(
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/productdetail/:id' element={<ProductDetail/>}/>
        </Routes>
    )
}

export default Routing;