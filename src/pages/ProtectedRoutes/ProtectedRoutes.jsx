import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SigninRequired from '../../component/Signupandsigin/SigninRequired';

import { setPreviousUrl } from '../../Redux/signInSlice/signinSlce';
const ProtectedRoutes = () => {
const { user } = useSelector(state => state.signinSlce)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    user ? <Outlet /> : <SigninRequired />
  )
}

export default ProtectedRoutes;