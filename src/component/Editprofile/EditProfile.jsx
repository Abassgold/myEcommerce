import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';

const EditProfile = () => {
    const context = useContext(searchContext)
    const { user, getToken  } = context;
    if (!user) {
        return;
    }
    const [message, setMessage] = useState('')
    const [selectedImage, setSelectedImage] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()
    let url = `http://localhost:5000/user/editprofile/me`;
    const handleFileChange = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            let result = reader.result
            setSelectedImage(result)
            formik.setFieldValue('photo', result)
        }
    };
    const formik = useFormik({
        initialValues: {
            id: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            photo: user?.photo?.url
        },
        onSubmit: async (value) => {
            try {
                const res = await fetch(url, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(value),
                })
                const result = await res.json();
                if (result?.success) {
                    setTimeout(() => {
                    getToken(result?.token)
                    }, 100);
                console.log(result);
                    return navigate('/')
                }
                setMessage(result?.msg)
    
            } catch (error) {
                console.log(error.message);
            }
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Pls enter your first name'),
            lastName: Yup.string().required('Please enter your last name'),
            email: Yup.string().email('Email is invalid').required('Please enter your name'),
            photo: Yup.string().required('Pls upload your file')
        })
    })
    let isValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-black bg-none`
    let isInValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-red-600 bg-none`
    console.log(formik.values);
    return (
        <div>
            <div className='md:w-[40%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
            {
                            message && (
                                <div className='my-2'>
                                    <AlertComponent message={message} isVisible={isVisible} setIsVisible={setIsVisible} />
                                </div>
                            )
                        }
                <div className='rounded-e-[5px] bg-[#d9d9d9] h-[30rem] pt-5 pb-3 px-2'>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="pb-2">
                                <input defaultValue={user?.firstName} type="text" placeholder='Your first name...' className={formik.touched.firstName && formik.errors.firstName ? isInValid : isValid} onChange={formik.handleChange} name='firstName' onBlur={formik.handleBlur} />
                                <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.firstName && formik.errors.firstName}</label>
                            </div>
                            <div className="pb-2">
                                <input defaultValue={user?.lastName} type="text" placeholder='Your last name...' className={formik.touched.lastName && formik.errors.lastName ? isInValid : isValid} onChange={formik.handleChange} name='lastName' onBlur={formik.handleBlur} />
                                <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.lastName && formik.errors.lastName}</label>
                            </div>
                            <div className="pb-2">
                                <input defaultValue={user?.email} v type="email" placeholder='Your  email...' className={formik.touched.email && formik.errors.email ? isInValid : isValid} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} />
                                <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.email && formik.errors.email}</label>
                                {message && <AlertComponent message={message} isVisible={isVisible} setIsVisible={setIsVisible} />}
                            </div>

                            <div className="pb-2">
                                <div className={formik.touched.photo && formik.errors.photo ? isInValid : isValid}>
                                    <div className={`flex items-center gap-5`}>
                                        <img className={`h-[3rem] w-[3rem] rounded-full`} src={selectedImage ? selectedImage : user?.photo.url} alt="" />
                                        <input type="file" accept='images/*' placeholder='Upload file' onChange={handleFileChange} name='photo' onBlur={formik.handleBlur} />
                                    </div>
                                </div>
                                <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.photo && formik.errors.photo}</label>
                            </div>
                            <div className='text-[1.3rem]
                            text-center text-white transition-all duration-[500ms] bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>
                                <button className=' w-full' type='submit' to=''>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditProfile