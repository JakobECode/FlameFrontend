import { Route, Routes } from "react-router-dom";
import ProductDetail from "../views/ProductDetail";
import Home from "../views/Home";
import ProductInsert from '../views/ProductInsert';
import ProductEdit from '../views/ProductEdit';

const Routing = () => {
    return(
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/productdetail/:id' element={<ProductDetail/>}/>
            <Route path = '/productinsert' element={<ProductInsert/>}/>
            <Route path='/productedit/:id' element={<ProductEdit />} />

            
        </Routes>
    )
}

export default Routing;