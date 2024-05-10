import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';

const ChangePassword = () => {
    const context = useContext(searchContext)
    const { getToken, user } = context;
    if (!user) return;
    const [isVisible, setIsVisible] = useState(false)
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    let URI = `http://localhost:5000/user/password/update`;
    const formik = useFormik({
        initialValues: {
            id: user?._id,
            oldPassword: '',
            newPassword: ''
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
            oldPassword: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your old password'),
            newPassword: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your new password')
        }),

    });
    console.log(formik.values);
    let isValid = 'w-full ps-4 py-3 border-[1px] hover:border-[3px] border-black';
    let isInValid = 'w-full ps-4 py-3 border-[1px] hover:border-[3px] border-red-600'
    return (
        <div>
            <div className='md:w-[50%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
                <div>
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
                                    <input type="password" placeholder='Your  email...' className={formik.touched.oldPassword && !formik.errors.oldPassword ? isInValid : isValid} onChange={formik.handleChange} name='oldPassword' onBlur={formik.handleBlur} />
                                </div>
                                <label htmlFor="" className='text-red-600'>{formik.errors.oldPassword}</label>
                                <div className="pb-2">
                                    <input type="password" placeholder='Your password...' className={formik.touched.newPassword && formik.errors.newPassword ? isInValid : isValid} onChange={formik.handleChange} name='newPassword' onBlur={formik.handleBlur} />
                                </div>
                                <label htmlFor="" className='text-red-600'>{formik.errors.newPassword}</label>
                                <div className="text-center mb-2 text-white">
                                    <button type='submit' className='w-full bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>Update Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword