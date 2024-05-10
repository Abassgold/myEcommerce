import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';


const PasswordReset = () => {
    const context = useContext(searchContext)
    const { getToken, user } = context;
    // if (user) return;
    const {id, token} = useParams()
    const [isVisible, setIsVisible] = useState(false)
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    let URI = `http://localhost:5000/user/reset-password/${id}/${token}`;
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.patch(URI, values)
                if (data?.success) {
                    setTimeout(() => {
                        getToken(localStorage.userToken)
                    }, 1000);
                    return navigate('/');
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
            password: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your old password'),
            confirmPassword: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your new password')
        }),

    });
    console.log(formik.values);
    let isValid = 'w-full text-[1.2rem] ps-4 py-3 border-[1px] hover:border-[3px] border-black';
    let isInValid = 'w-full text-[1.2rem] ps-4 py-3 border-[1px] hover:border-[3px] border-red-600'
    return (
        <div>
        <div className='md:w-[50%] w-[90%] mx-auto mt-[5rem] mb-[3rem] '>
        <div className='rounded-e-[5px] bg-[#d9d9d9] pt-5 mb-10 pb-3 px-2'>
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
                            <h1 className={`text-[2.5rem] font-[600] text-[#424545]`}>New Password</h1>
                            <label htmlFor=""  className='text-[1.5rem] font-[600] mb-1 text-[#424545]'>Password</label>
                            <input type="password" placeholder='Enter your new password...' className={formik.touched.password && !formik.errors.password ? isInValid : isValid} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} />
                        </div>
                        <label htmlFor="" className='text-red-600'>{formik.errors.password}</label>
                        <div className="pb-2">
                        <label htmlFor=""  className='text-[1.5rem] font-[600] mb-1 text-[#424545]'>Confirm Password</label>
                            <input type="password" placeholder='Confirm your new Password...' className={formik.touched.confirmPassword && formik.errors.confirmPassword ? isInValid : isValid} onChange={formik.handleChange} name='confirmPassword' onBlur={formik.handleBlur} />
                        </div>
                        <label htmlFor="" className='text-red-600'>{formik.errors.confirmPassword}</label>
                        <div className="text-center mb-2 text-white">
                            <button type='submit' className='w-full bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm text-[1.3rem]'>Update Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
           
        </div>
    )
}

export default PasswordReset;