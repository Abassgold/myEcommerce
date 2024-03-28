import ReactNavbar from './component/Navbar/ReactNavbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './component/Navbar/Footer/Footer';
import NewsLetter from './pages/NewsLetter';
import Support from './component/Support/Support';
import Signup from './component/Signupandsigin/Signup'
import Signin from './component/Signupandsigin/Signin';
import BuyNow from './pages/BuyNow';
import Reviews from './pages/Reviews';
import Userdashboard from './pages/Userdashboard';
import Sidebar from './component/Sidebar';
import clientSocket from 'socket.io-client'
import { useRef, useEffect, createContext, useState, } from 'react';
import Chat from './pages/Chat';
import Test from './component/Test';
import AdminPost from './pages/AdminPost';
import SingleCart from './component/SingleCart/SingleCart';
import MyCart from './pages/MyCart';
import HomeBuynow from './component/HomeBuynow/HomeBuynow';
import ProductDetails from './pages/ProductDetails';


export const searchContext = createContext()
const App = () => {
  let token = localStorage.token
  let URI = `http://localhost:5000`
  const socket = useRef()
  const [filter, setFilter] = useState('')
  return (
    <searchContext.Provider value={{filter, setFilter}}>
      <>
        <div>
          <div className={`sticky top-0`}>
            <ReactNavbar />
          </div>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/newsletter' element={<NewsLetter />} />
            <Route path='/support' element={<Support />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/dashboard' element={token ? <Userdashboard /> : <Navigate to='/signin' />} />
            <Route path='/buy-now' element={<BuyNow />} />
            <Route path='/forum/*' element={<Reviews />} />
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/chat' element={<Chat socket={socket.current} />} />
            <Route path='/test' element={<Test />} />
            <Route path='/admin' element={<AdminPost />} />
            <Route path='/buy-now/Mycart' element={<MyCart />} />
            <Route path='/product-page/:id' element={<HomeBuynow />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </>
    </searchContext.Provider>

  );
}

export default App;
