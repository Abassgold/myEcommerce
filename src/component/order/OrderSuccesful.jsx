import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccesful = () => {
    return (
        <>
            <section className='fixed p-4  inset-0 bg-[#f2f4f5] h-screen w-full z-[300] place-content-center'>
                <div className='container mx-auto'>
                    <div className='bg-[#ffff] container rounded-lg flex justify-center shadow-lg max-w-[30rem] mx-auto py-[4rem] px-4'>
                        <div className=' max-w-[25rem]'>
                            <img className=' bg-none mx-auto object-fill' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsW8K_4qO-_wfEzScYzKRcxUuuBEPqKuH3Tw&s" alt="" />
                            <div>
                                <h2 className='text-[#2f2f2f] text-[1.2rem] text-center font-[500] my-2'>Thank you for ordering!</h2>
                                <small className='my-2'> We'll send you a shipping confirmation email as soon as your order ships</small>
                                <div className='flex justify-between items-center text-center gap-4 my-2'>
                                    <Link to='/order/me' className='font-[600] flex-1 text-[0.9rem] uppercase block border-[2px] rounded-md p-2 border-[#e5e5e5]'>view order</Link>
                                    <Link to='/' className='flex-1 uppercase block p-2 duration-500 hover:bg-[#067A22] bg-[#006e28] text-white font-[600] rounded-md text-[0.9rem]'>Continue shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderSuccesful