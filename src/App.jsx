
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Features from './components/Features';
import Products from './components/Products';
import Review from './components/Review';
import Footer from './components/Footer';
import Cart from './components/Cart';
import toast, { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';
import {store}from "./redux/store"
import { useState } from 'react';
function App() {
  const [showCart,setShowCart] = useState(false)
  return (
   
    <div>

<Provider store = {store}>
     <Navbar setShowCart={setShowCart}/>
     {showCart &&( <Cart setShowCart={setShowCart}/>)}
     <div id='home'>
     <Home/>
     </div>
     
   <div id='shop'>
    <Shop/>
   </div>
   
   <div>
    <Collection/>
   </div>
   <div id='features'>
    <Features/>
   </div>
   <div id='products'>
    <Products/>
   </div>
   <div>
    <Review/>
   </div>
  <Toaster position="top-center " reverseOrder={false}/>
<Footer/>
  
    
   

  
</Provider>
   
 
 
   
    </div>
  
  );
}

export default App;
