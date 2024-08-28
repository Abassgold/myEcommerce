import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SigninRequired = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const goToSignin = ()=>{
        navigate('/signin', { state: { previousUrl: `${location?.pathname}`} });
    }
    return (
        <>
            <section className=' container mx-auto my-6'>
                <h1 className=' text-[2rem] font-[600]'>Checkout</h1>
                <div className='flex justify-center text-center'>
                    <div >
                        <img src="https://fashioning.vercel.app/_next/image?url=%2Fauth2.jpg&w=384&q=75" alt="" />
                        <div>
                            <h1 className='text-[2rem] font-[500] my-2'>Sign in required</h1>
                            <p className='mb-6 text-[#F6510B] text-[1rem]'>you need to sign in to proceed</p>
                        </div>
                        <div>
                            <button></button>
                            <button className='p-3 text-white hover:bg-white hover:text-[#44dbbd] bg-[#44dbbd] border-2 border-[#44dbbd] transition-all duration-500 ' onClick={goToSignin}>
                            Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SigninRequired