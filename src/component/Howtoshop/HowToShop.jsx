import React from 'react';

const HowToShop = () => {
    return (
        <div className='bg-[#f7f7f7] py-[8rem]'>
            <div className="flex flex-col  md:items-end items-center">
                <div className='md:w-1/2 w-3/4'>
                    <h1 className='text-[42px] lead-[52px] text-[#2f2e2e]'>How to Shop with Exclusive</h1>
                </div>
                <div className='md:w-1/2 w-3/4'>
                    <div className='w-[15rem]'>
                    <ul className='list-disc text-[15px] text-[#605e5e]'>
                        <li>Browse Our Selection of Products</li><br />
                        <li>Create an Account and Log In</li><br />
                        <li>Add the products you want to buy to your cart, and proceed to checkout. We offer fast shipping and secure payment options to ensure that your shopping experience is hassle-free.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToShop;
