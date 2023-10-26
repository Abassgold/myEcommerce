import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const Signup = () => {
    const navigate = useNavigate()
    let URI = `http://localhost:5000/user/signup`;
    const handleFileChange = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            let result = reader.result
            formik.setFieldValue('photo', result)
        }
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            photo: ''
        },
        onSubmit: (values) => {
            axios.post(URI, values)
                .then((res) => {
                    if (!(res.status === 200)) return console.log(`Upload is not found`)
                    console.log(res.data);
                    return navigate('/signin')
                })
                .catch(err => console.log(`There is an err while uploading ${err}`))
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Pls enter your first name'),
            lastName: Yup.string().required('Please enter your last name'),
            email: Yup.string().email('Email is invalid').required('Please enter your name'),
            password: Yup.string().min(4, 'Password must not less than 4 characters').max(12, 'Password must not exceed 12 characters').required('Please enter your password'),
            photo: Yup.string().required('Pls upload your file')
        })
    });
    let isValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-black bg-none`
    let isInValid = `w-full ps-4 py-3 outline-none border-[1px] hover:border-[3px] border-red-600 bg-none`
    return (
        <div>
            <div className='md:w-[70%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-center'>
                    <div className='sm:block hidden h-[30rem]'>
                        <div className='h-full'>
                            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-s-[5px] object-cover h-full w-full' />
                        </div>
                    </div>
                    <div className='rounded-e-[5px] bg-[#d9d9d9] h-[30rem] pt-5 pb-3 px-2'>
                        <form action="" onSubmit={formik.handleSubmit}>
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
                                </div>
                                <div className="pb-2">
                                    <input type="password" placeholder='Your password...' className={formik.touched.password && formik.errors.password ? isInValid : isValid} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.password && formik.errors.password}</label>
                                </div>
                                <div className="pb-2">
                                    <input type="file" placeholder='Upload file' className={formik.touched.photo && formik.errors.photo ? isInValid : isValid} onChange={handleFileChange} name='photo' onBlur={formik.handleBlur} />
                                    <label htmlFor="" className='mt-[1px] text-red-600'>{formik.touched.photo && formik.errors.photo}</label>
                                </div>
                                <div className="text-end mb-2 text-white">
                                    <button type='submit' className=' transition-all duration-[500ms] bg-[#44dbbd] py-3 px-5 hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm'>Submit</button>
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
        </div>
    );
}
export default Signup;
