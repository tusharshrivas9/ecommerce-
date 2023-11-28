import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Productcart from './components/Productcart';
import Cartpage from "./components/Cartpage";


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cartpage/>}/>
      <Route path='/Product' element={<Productcart/>}/>  
     </Routes> 
    </>
  );
}

export default App;
