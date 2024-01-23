import {Route,Routes} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

//Komponent som hanterar content ytan i applikationen och vilken komponent 
//som skall visas där
const Main = () => {

    //Det går att sätta path på 2 olika sätt. Exact path är som att 
    //säga === dvs måste vara identiskt med länken. Att använda path är 
    //ungefär som contains dvs innehåller något men behöver inte vara exakt
    return(
         <Routes>
            <Route exact path ="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element= {<Contact />} />
         </Routes> 
          )


}

export default Main;