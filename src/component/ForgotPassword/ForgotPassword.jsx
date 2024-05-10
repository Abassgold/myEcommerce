import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Alert } from 'flowbite-react';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';

const ForgotPassword = () => {
    const context = useContext(searchContext)
    const {user} = context
    const [isVisible, setIsVisible] = useState(false)
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    let URI = `http://localhost:5000/user/forgot-password`;
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(URI, values)
                if (data?.success) {
                    setTimeout(() => {
                    navigate('/forgot-password-email')
                    }, 1000);
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
            email: Yup.string().email('Email is invalid').required('Please enter your name'),
        })
    });
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
                                    <input type="email" placeholder='Enter the user email...' className={formik.touched.email && !formik.errors.email ? isInValid : isValid} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} />
                                </div>
                                <label htmlFor="" className='text-red-600'>{formik.errors.email}</label>
                                <div className="text-end mb-2 text-white">
                                    <button type='submit' className='w-full bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
