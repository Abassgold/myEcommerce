import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Alert } from 'flowbite-react';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';

const EmailLink = () => {
    const context = useContext(searchContext)
    const { user } = context;
    return (
        <div>
            <div className='md:w-[50%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
                <h1 className={` text- text-[1.5rem]`}> Password-reset link has been sent to your registered email</h1>
            </div>
            <div className={`text-center mb-[2rem]`}>
                <Link to='/' className='text-white bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-xl'>Home</Link>
            </div>
        </div>
    )
}

export default EmailLink