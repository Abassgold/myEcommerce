import { useDispatch, useSelector } from 'react-redux';
import {  Outlet, useLocation  } from 'react-router-dom'
import SigninRequired from '../../component/Signupandsigin/SigninRequired';
import { setPreviousUrl } from '../../Redux/signInSlice/signinSlce';
const ProtectedRoutes = () => {
   const {authToken} = useSelector(state=>state.signinSlce)
   const location = useLocation()
   console.log(location?.pathname);
  const dispatch =  useDispatch()
   

  return (
    authToken? <Outlet/> : <SigninRequired />
  )
}

export default ProtectedRoutes;