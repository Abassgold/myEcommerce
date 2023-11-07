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
import { useRef, useEffect } from 'react';
import Chat from './pages/Chat';
import Test from './component/Test';



const App = () => {
  let token = localStorage.token
  let URI = `http://localhost:5000`
  const socket = useRef()
  useEffect(() => {
    // socket.current = clientSocket(URI)
  }, []);
  return (
    <>
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
        <Route path='/chat' element={<Chat socket={socket.current}/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
