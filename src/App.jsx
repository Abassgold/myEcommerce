import React from 'react';
import ReactNavbar from './component/Navbar/ReactNavbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './component/Navbar/Footer/Footer';
import NewsLetter from './pages/NewsLetter';
import Support from './component/Support/Support';

const App = () => {
  return (
    <>
      <ReactNavbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
