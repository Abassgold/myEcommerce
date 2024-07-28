import ReactNavbar from './component/Navbar/ReactNavbar';
import axios from 'axios';
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
import { loadUser } from './Redux/LoadUser/LoadUser';
import { useDispatch, useSelector } from 'react-redux';
import store from './Redux/Store';
import Profile from './component/Profile/Profile';
import EditProfile from './component/Editprofile/EditProfile';
import ChangePassword from './component/ChangePassword.jsx/ChangePassword';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import EmailLink from './component/ForgotPassword/EmailLink';
import Reset from './component/ForgotPassword/Reset';
import Carts from './component/CartComponent/Carts';
import Checkout from './component/Checkout/Checkout';
import ProtectedRoutes from './pages/ProtectedRoutes/ProtectedRoutes';
import { addUser } from './Redux/signInSlice/signinSlce';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePayment from './component/Payment/StripePayment';
import MyOrder from './component/myOrder/MyOrder';
import OrderDetails from './component/myOrder/OrderDetails';
export const searchContext = createContext()
const App = () => {
  const dispatch = useDispatch()
  let URI = `http://localhost:5000/user/dashboard`
  const { authToken } = useSelector(state => state.signinSlce)
  // let URI = `http://localhost:5000`
  const socket = useRef()
  const [stripeApiKey, setStripeApiKey] = useState('')
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const getSripeapiKey = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/payment/stripeapi')
      setStripeApiKey(data?.stripeApiKey)
      console.log(data?.stripeApiKey);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(URI, {
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        });
        if (data?.success) {
          dispatch(addUser(data?.user));
          setIsAuth(true)
          return;
        }
        localStorage.removeItem('userToken');
        dispatch(addUser(null));
        setIsAuth(false)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
    getSripeapiKey();
  }, [authToken])
  return (
    <searchContext.Provider value={{ filter, setFilter, isAuth, user }}>
      <>
        <div className='text-[1.5rem] font-[600] text-[red]'>
          <marquee behavior="alternate" direction="left">Site under development</marquee>
        </div>
        <div>
          <div className={`sticky top-0 z-[500]`}>
            <ReactNavbar />
          </div>
          <div></div>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/newsletter' element={<NewsLetter />} />
            <Route path='/support' element={<Support />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={!isAuth ? <Signin /> : <Navigate to='/' />} />
            <Route path='/buy-now' element={<BuyNow />} />
            <Route path='/forum/*' element={<Reviews />} />
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/chat' element={<Chat socket={socket.current} />} />
            <Route path='/test' element={<Test />} />
            <Route path='/admin' element={<AdminPost />} />
            <Route path='/buy-now/Mycart' element={<MyCart />} />
            <Route path='/product-page/:id' element={<HomeBuynow />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path='/profile/me/edit' element={<EditProfile />} />
              <Route path='/profile/me' element={<Profile />} />
              <Route path='/password/edit' element={<ChangePassword />} />
              <Route path='/dashboard' element={<Userdashboard />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/reset-password/:id/:token' element={<Reset />} />
              <Route path='/forgot-password-email' element={<EmailLink />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/order/confirm' element={<ConfirmOrder />} />
              <Route path='/payment' element={<StripePayment stripeKey={stripeApiKey} />} />
              <Route path='/order/me' element={<MyOrder />} />
              <Route path='/order/details/:id' element={<OrderDetails />} />
            </Route>
            {/* Protected Routes */}
            <Route path='/cart' element={<Carts />} />
          </Routes>
          <Footer />
        </div>
      </>
    </searchContext.Provider>

  );
}

export default App;
