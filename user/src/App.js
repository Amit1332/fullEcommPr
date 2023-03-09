import './App.css';
import Sidebar from './Components/include/Sidebar/Sidebar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import store from "./Store"
import VerifyOtp from "./Components/Authentication/VerifyOtp"
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import CreateyourAccount from './Components/Authentication/CreateyourAccount';
import About from './Components/AboutPage/About';
import Contact from './Components/ContactPage/Contact';
import Home from './Components/Home/Home/Home';
import MyShopingCart from './Components/MyShopingCart/MyShopingCart';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import MensWear from './Components/MensWear/MensWear';








function App() {


  return (
    <div className="App text-start">
           <BrowserRouter>
      <Sidebar/>
      {/* <div style={{width:'100%',  display:'flex', alignItems:'center', justifyContent:'center'}}> */}

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/verify_otp" element={<VerifyOtp/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/create/account" element={<CreateyourAccount/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/shopping_cart" element={<MyShopingCart/>}/>  //not responsive
      <Route exact path="/single/product" element={<SingleProduct/>}/>
      <Route exact path="/products" element={<MensWear/>}/>


      


      </Routes>
      {/* </div> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
