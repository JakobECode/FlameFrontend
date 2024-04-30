import { Route, Routes } from "react-router-dom";
import ProductDetail from "../views/ProductDetail";
import Home from "../views/Home";
import ProductInsert from '../views/ProductInsert';
import ProductEdit from '../views/ProductEdit';
import Login from "../views/Login";
import Register from "../views/Register";
import Contact from "../views/Contact";
import About from "../views/About";
import OrderList from "../views/OrderList";
import OrderDetail from "../views/OrderDetail";

const Routing = () => {
    return(
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/productdetail/:id' element={<ProductDetail/>}/>
            <Route path = '/productinsert' element={<ProductInsert/>}/>
            <Route path='/productedit/:id' element={<ProductEdit />} />
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/Register' element={<Register/>}/>
            <Route path ='/Contact' element={<Contact/>}/>
            <Route path ='/About' element={<About/>}/>
            <Route path ='/OrderList' element={<OrderList/>}/>
            <Route path='/OrderDetail/:orderId' element={<OrderDetail/>}/>
            
        </Routes>
    )
}

export default Routing;