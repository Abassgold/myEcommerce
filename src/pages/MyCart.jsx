import React from 'react'

const MyCart = () => {
    return (
        <div className={`md:w-[70%] w-[90%] py-[5rem] mx-auto`}>
            <div className={`grid grid-cols-2 justify-between gap-5`}>
                <div>
                    <div>
                        <div className={`py-[1rem] border-b-[1px] border-[#d5d5d5] text-[20px] font-[100]`}>
                            <p>My cart</p>
                        </div>
                        <div>
                            <div className='grid md:grid-cols-2 justify-between'>
                                <div>
                                    <div className='grid md:grid-cols-2'>
                                        <div className='h-[7rem] w-[7rem] border-[1px] border-[#D5D5D5] p-2'>
                                            <img className='w-full h-full bg-red-600' src="https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/G/F/51119_1653575963.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className='text-[18px] text-[#2f2e2e] font-[400]'>EZ 00002</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-[#2f2e2e] grid grid-cols-3 justify-between'>
                                        <div>
                                            <span>-</span>
                                            <span>1</span>
                                            <span>+</span>
                                        </div>
                                        <p>₦1,000.00</p>
                                        <span class="material-symbols-outlined">
                                            close
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={`py-[1rem] border-b-[1px] border-[#d5d5d5] text-[20px] font-[100]`}>
                            <p>Order summary</p>
                        </div>
                        <div>
                            <div className='flex'>
                                <div>
                                    <div className='grid md:grid-cols-2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart