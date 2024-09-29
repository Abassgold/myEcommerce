import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import AlertComponent from '../Alert/AlertComponent';
import CostumTitle from '../../../CosutumTitle/CostumTitle';
const Signup = () => {
    let avatarUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&usqp=CAU`
    const [message, setMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    let URI = `${import.meta.env.VITE_URI}/user/signup`;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
            setLoader(true)
            axios.post(URI, values)
                .then((res) => {
                    if (res?.data?.success) {
                        navigate('/signin');
                    } else {
                        setMessage(res.data.msg);
                        setIsVisible(!isVisible)
                    }
                })
                .catch(err => console.log(`There is an error while uploading ${err}`));
                setLoader(false)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please enter your first name'),
            lastName: Yup.string().required('Please enter your last name'),
            email: Yup.string().email('Email is invalid').required('Please enter your email'),
            password: Yup.string()
            .min(4, 'Password must not be less than 4 characters')
            .max(12, 'Password must not exceed 12 characters')
            .required('Please enter your password'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
            })
    });
    let isValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-black bg-none`
    let isInValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-red-600 bg-none`
    return (
        <>
        <CostumTitle title='SignUp'/>
            <div className='md:w-[70%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center'>
                    <div className='sm:block hidden '>
                        <div className='h-full'>
                            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-s-[5px] object-cover h-full w-full' />
                        </div>
                    </div>
                    <div className='rounded-e-[5px] bg-[#d9d9d9]  pt-5 pb-3 px-2'>
                        <form  onSubmit={formik.handleSubmit}>
                            <div>
                                <div className="pb-2">
                                    <input type="text" placeholder='Your first name...' className={formik.touched.firstName && formik.errors.firstName ? isInValid : isValid} onChange={formik.handleChange} name='firstName' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.firstName && formik.errors.firstName}</label>
                                </div>
                                <div className="pb-2">
                                    <input type="text" placeholder='Your last name...' className={formik.touched.lastName && formik.errors.lastName ? isInValid : isValid} onChange={formik.handleChange} name='lastName' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.lastName && formik.errors.lastName}</label>
                                </div>
                                <div className="pb-2">
                                    <input type="email" placeholder='Your  email...' className={formik.touched.email && formik.errors.email ? isInValid : isValid} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.email && formik.errors.email}</label>
                                    {message && <AlertComponent message={message} isVisible={isVisible} setIsVisible={setIsVisible} />}
                                </div>
                                <div className="pb-2">
                                    <input type="password" placeholder='Your password...' className={formik.touched.password && formik.errors.password ? isInValid : isValid} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.password && formik.errors.password}</label>
                                </div>
                                <div className="pb-2">
                                    <input type="password" placeholder='Confirm your password...' className={formik.touched.confirmPassword && formik.errors.confirmPassword ? isInValid : isValid} onChange={formik.handleChange} name='confirmPassword' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.confirmPassword && formik.errors.confirmPassword}</label>
                                </div>
                                <div className="text-end mb-2 text-white">
                                    <button disabled={loader} type='submit' className=' transition-all duration-[500ms] bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>
                                    {loader ? (
                                        <span>Loging In....</span>) : (
                                        <span>Submit</span>
                                    )}</button>
                                </div>
                                <div>
                                    <a href="" className='flex gap-3 ps-10 py-3 items-center bg-white rounded-[3px]'>
                                        <img src="https://banner2.cleanpng.com/20180416/ppe/kisspng-g-suite-pearl-river-middle-school-google-docs-soft-google-plus-5ad4f155b36555.6827254815239048537348.jpg" alt="" className='w-[30px]' />
                                        <h1 className='font-[500] text-[17px]'>Sign up with google</h1>
                                    </a>
                                </div>
                                <div className='flex justify-between items-center px-10 mt-2'>
                                    <span className='font-[500]'>Already a member?</span>
                                    <Link to='/signin' className='text-[#44DBBD] text-[17px] font-[600]'>SIGNIN</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;
