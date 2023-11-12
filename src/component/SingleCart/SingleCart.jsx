import React from 'react'
import { Link } from 'react-router-dom';

const SingleCart = () => {
    return (
        <section className={`py-10`}>
            <div className={``}>
                <div className='md:w-[60%] mx-auto'>
                    <div className={`flex gap-5 h-[40rem] p-[2rem]  bg-red-600`}>
                        <div className='flex-1 bg-white'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DYkitNzOfeNt_kOssNio0g_IIugsqiX4tw&usqp=CAU' alt="" className={`w-[20rem]`} title='Kola' />
                        </div>
                        <div className='flex-1 bg-white'>
                            <div>
                                <h1 className='text-[25px]'>EZ 00002</h1><br />
                                <h1 className='text-[20px]'>$2000</h1><br />
                                <small className='text-[#2f2e2e] font-[50]'>SKU: 002</small><br /><br />
                                <small className='text-[#2f2e2e] font-[50]'>Quantity</small>
                                <span>1</span>
                                <div className={`mt-6`}>
                                    <button className={`w-full p-[5px] bg-[#44dbbd] text-white hover:text-[#44dbbd] hover:bg-white duration-500 border-[2px] border-[#44dbbd]`}>Add to Cart</button>
                                </div>
                                <div className={`underline mt-2 font-[50]`}>
                                    <Link>View More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCart;