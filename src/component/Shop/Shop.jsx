import React from 'react';
import { Link } from 'react-router-dom';
import HowToShop from '../Howtoshop/HowToShop';
import { motion } from 'framer-motion';

const Shop = () => {
    return (
        <section className='mx-auto md:w-[70%] w-[90%]'>
            <motion.div className='py-[10rem]'
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{delay: 0.1, duration: 0.3, type: 'spring', stiffness:  130}}
            >
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
                        <Link to='/buy-now' className='p-3 text-white hover:bg-white hover:text-[#44dbbd] bg-[#44dbbd] border-2 border-[#44dbbd] transition-all duration-500 '>Buy Now</Link>
                    </div>
                </div>
            </motion.div>
            <HowToShop />
        </section>

    );
}

export default Shop;
