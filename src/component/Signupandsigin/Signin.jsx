import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Signin = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object
    })
    return (
        <div>
            <div className='md:w-[70%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center'>
                    <div className='sm:block hidden'>
                        <div className='h-full'>
                            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-s-[5px object-cover h-full w-full' />
                        </div>
                    </div>
                    <div className='rounded-e-[5px] bg-[#d9d9d9] pt-5 pb-3 px-2'>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div>
                                <div className="pb-2">
                                    <input type="email" placeholder='Your  email...' className='w-full ps-4 py-3 border-[1px] hover:border-[3px] border-black' onChange={formik.handleChange} name='email' onBlur={formik.handleBlur}/>
                                </div>
                                    <label htmlFor="">{formik.email.error}</label>
                                <div className="pb-2">
                                    <input type="password" placeholder='Your password...' className='border-[1px] hover:border-[3px] border-black w-full ps-4 py-3' onChange={formik.handleChange} name='password' onBlur={formik.handleBlur}/>
                                </div>
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
                                    <span className='font-[500]'>Don't have an account yet?</span>
                                    <Link className='text-[#44DBBD] text-[17px] font-[600]'>SIGNUP</Link>
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
