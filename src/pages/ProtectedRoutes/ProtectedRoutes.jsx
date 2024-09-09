import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SigninRequired from '../../component/Signupandsigin/SigninRequired';

import { setPreviousUrl } from '../../Redux/signInSlice/signinSlce';
import AddCartRequired from '../../component/CartComponent/AddCartRequired';
const ProtectedRoutes = () => {
  const { authToken } = useSelector(state => state.signinSlce)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state => state.cartReducer)


  return (
    authToken ? (
      cartItems?.length > 0 ? (
        <Outlet />
      ) : (
        <AddCartRequired/>
      )
    ) : (
      <SigninRequired />
    )
    
  )
}

export default ProtectedRoutes;