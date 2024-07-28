import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Alert } from 'flowbite-react';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';
import { fetchUserInfo } from '../../Redux/signInSlice/signinSlce';
import { useDispatch } from 'react-redux';
const Signin = () => {
    const dispatch = useDispatch()

    const context = useContext(searchContext)
    const token = localStorage.userToken
    const { getToken } = context;
    const [isVisible, setIsVisible] = useState(false)
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let URI = `${import.meta.env.VITE_URI}/user/signin`;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(URI, values)
                if (data?.success) {
                    console.log(data);
                    setTimeout(() => {
                        dispatch(fetchUserInfo(data?.token))
                        navigate(location?.state?.previousUrl ? location?.state?.previousUrl : '/');
                    }, 500);
                    return;
                }
                setmessage(data?.msg)
                setIsVisible(!isVisible)
            } catch (err) {
                console.log(err.message);
                setmessage(err.message)
                setIsVisible(!isVisible)
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email is invalid').required('Please enter your email'),
            password: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your password')
        })
    });
    let isValid = 'w-full ps-4 py-3 border-[2px] hover:border-[3px] border-black outline-none';
    let isInValid = 'w-full ps-4 py-3 border-[2px] hover:border-[3px] border-red-600 outline-none'
    return (
        <div>
            <div className='container px-[1rem] mx-auto mt-[5rem] mb-[3rem]'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center'>
                    <div className='sm:block hidden'>
                        <div className='h-full'>
                            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-s-[5px object-cover h-full w-full' />
                        </div>
                    </div>
                    <div className='rounded-e-[5px] bg-[#d9d9d9] pt-5 pb-3 px-2'>
                        {
                            message && (
                                <div className='my-2'>
                                    <AlertComponent message={message} isVisible={isVisible} setIsVisible={setIsVisible} />
                                </div>
                            )
                        }
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div>
                                <div className="pb-2">
                                    <input type="email" placeholder='Your  email...' className={formik.touched.email && formik.values.email && !formik.errors.email ? isInValid : isValid} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} />
                                </div>
                                <label htmlFor="" className='text-red-600'>{formik.errors.email}</label>
                                <div className="pb-2">
                                    <input type="password" placeholder='Your password...' className={formik.values.password && formik.touched.password && formik.errors.password ? isInValid : isValid} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} />
                                </div>
                                <label htmlFor="" className='text-red-600'>{formik.errors.password}</label>
                                <div className="text-end mb-2 text-white">
                                    <button type='submit' className='bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>Submit</button>
                                </div>
                                <div>
                                    <a href="" className='flex gap-3 ps-10 py-3 items-center bg-white rounded-[3px]'>
                                        <img src="https://banner2.cleanpng.com/20180416/ppe/kisspng-g-suite-pearl-river-middle-school-google-docs-soft-google-plus-5ad4f155b36555.6827254815239048537348.jpg" alt="" className='w-[30px]' />
                                        <h1 className='font-[500] text-[17px]'>Sign in with google</h1>
                                    </a>
                                </div>
                                <div className='flex justify-between items-center px-10 mt-2'>
                                    <span className='font-[500]'>New to this site?</span>
                                    <Link to='/signup' className='text-[#44DBBD] text-[17px] font-[600]'>SIGNUP</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
