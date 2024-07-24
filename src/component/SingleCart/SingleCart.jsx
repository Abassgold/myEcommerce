import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const SingleCart = ({ gettingValue}) => {
    return (
        <section>
            <div className={``}>
                <div className='container mx-auto  bg-white'>
                    <div className={`flex gap-5 h-[30rem] p-[2rem`}>
                        <div className='flex-1'>
                            <img src={gettingValue.images[0].url} alt="" className={`w-[20rem] h-[23rem]`} title='Kola' />
                        </div>
                        <div className='flex-1'>
                            <div className={`px-6`}>
                                <p className='text-[2.5rem] font-[200] text-[#504866]'>{gettingValue.product}</p><br />
                                <p className='text-[2rem]'>${gettingValue.price}</p><br />
                                <small className='text-[#2f2e2e] font-[50]'>SKU: 002</small><br /><br />
                                <small className='text-[#2f2e2e] font-[50]'>Quantity</small>
                                <div className={`flex items-center gap-2 text-[1.5rem]`}>
                                    <span class="material-symbols-outlined  bg-yellow-700 text-white cursor-pointer">
                                        remove
                                    </span>
                                    <span className={`mb-[1px]`}>1</span>
                                    <span class="material-symbols-outlined  bg-red-700 text-white cursor-pointer">
                                        add
                                    </span>
                                </div>
                                <div className={`mt-6`}>
                                    <button className={`w-full p-[1rem] text-[1.5rem] bg-[#44dbbd] text-white hover:text-[#44dbbd] hover:bg-white duration-500 border-[2px] border-[#44dbbd]`}>Add to Cart</button>
                                </div>
                                <div className={`underline mt-2 font-[50] text-[15px] pt-[1rem]`}>
                                    <Link to={`/product-details/${gettingValue._id}`}>View More Details</Link>
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