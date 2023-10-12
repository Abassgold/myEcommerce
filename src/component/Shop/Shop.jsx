import React from 'react';
import { Link } from 'react-router-dom';
import HowToShop from '../Howtoshop/HowToShop';

const Shop = () => {
    return (
        <section className='mx-auto md:w-[70%] w-[90%]'>
            <div className='py-[10rem]'>
                <div className=''>
                    <div>
                        <div className='md:w-[35rem]'>
                            <h1 className='text-[42px] leading-[50px] text-[#2f2e2e]'>Find the Best Deals on the Latest Products</h1>
                        </div><br />
                        <div className='md:w-[20rem]'>
                            <p className='text-[18px] font-[400] text-[#2f2e2e]'>
                                Welcome to Exclusive - the one-stop-shop for all your electronic and bag needs. Shop for the latest electronics, stylish bags, and more from our online store.
                            </p>
                        </div>
                        <a href="" className='text-decoration-underline'>Learn More</a><br /><br />
                        <Link className='p-3 text-white hover:bg-white hover:text-[#44dbbd] bg-[#44dbbd] border-2 border-[#44dbbd]'>Buy Now</Link>
                    </div>
                </div>
            </div>
            <HowToShop />
        </section>

    );
}

export default Shop;
