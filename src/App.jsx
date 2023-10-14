import React from 'react';
import ReactNavbar from './component/Navbar/ReactNavbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './component/Navbar/Footer/Footer';
import NewsLetter from './pages/NewsLetter';
import Support from './component/Support/Support';
import Signup from './component/Signupandsigin/Signup'
import Signin from './component/Signupandsigin/Signin';
import BuyNow from './pages/BuyNow';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <>
      <ReactNavbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/buy-now' element={<BuyNow/>}/>
        <Route path='/forum/*' element={<Reviews/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
