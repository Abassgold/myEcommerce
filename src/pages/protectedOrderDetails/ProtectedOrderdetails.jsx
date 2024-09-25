import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import SigninRequired from '../../component/Signupandsigin/SigninRequired';
import AddCartRequired from '../../component/CartComponent/AddCartRequired';

const ProtectedOrderdetails = () => {
const { user } = useSelector(state => state.signinSlce)
const { cartItems } = useSelector(state => state.cartReducer)

    return (
        user ? (
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
export default ProtectedOrderdetails;