import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import SigninRequired from '../../component/Signupandsigin/SigninRequired';
const { authToken } = useSelector(state => state.signinSlce)

const ProtectedOrderdetails = () => {
    return (
        authToken ? <Outlet /> : <SigninRequired />
    )
}

export default ProtectedOrderdetails